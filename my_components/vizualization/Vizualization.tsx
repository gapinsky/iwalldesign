"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

export default function Visualizer() {
  const [bgUrl, setBgUrl] = useState<string | null>(null);
  const [fgUrl, setFgUrl] = useState<string | null>(null);

  const stageRef = useRef<HTMLDivElement | null>(null);
  const bgImgRef = useRef<HTMLImageElement | null>(null);
  const fgImgRef = useRef<HTMLImageElement | null>(null);

  const [stageSize, setStageSize] = useState({ w: 960, h: 540 });
  const [fgNatural, setFgNatural] = useState({ w: 1, h: 1 });
  const [pos, setPos] = useState({ x: 480, y: 270 });
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);

  // 40% szerokości obszaru jako bazowy rozmiar grafiki
  const baseFgWidth = useMemo(() => stageSize.w * 0.4, [stageSize.w]);
  const fgDisplayWidth = baseFgWidth * scale;
  const fgDisplayHeight = (fgNatural.h / fgNatural.w) * fgDisplayWidth;

  // rozmiar obszaru
  useEffect(() => {
    if (!stageRef.current) return;
    const ro = new ResizeObserver(([e]) => {
      const r = e.contentRect;
      setStageSize({ w: Math.round(r.width), h: Math.round(r.height) });
    });
    ro.observe(stageRef.current);
    return () => ro.disconnect();
  }, []);

  // jeśli dołożysz grafikę zanim stage się zmierzy – wycentruj po zmianie
  useEffect(() => {
    if (fgUrl) setPos({ x: stageSize.w / 2, y: stageSize.h / 2 });
  }, [stageSize.w, stageSize.h, fgUrl]);

  // inputy
  const onPickBackground: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setBgUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return URL.createObjectURL(f);
    });
  };
  const onPickForeground: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const url = URL.createObjectURL(f);
    const img = new Image();
    img.onload = () => {
      setFgNatural({ w: img.naturalWidth, h: img.naturalHeight });
      setFgUrl(url);
      setScale(1);
      setRotation(0);
      setPos({ x: stageSize.w / 2, y: stageSize.h / 2 });
    };
    img.src = url;
  };

  // DRAG
  const dragRef = useRef<{
    startX: number;
    startY: number;
    x: number;
    y: number;
  } | null>(null);
  const onPointerDown: React.PointerEventHandler<HTMLImageElement> = (e) => {
    e.preventDefault(); // ← blokuje domyślne "drag image"
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      x: pos.x,
      y: pos.y,
    };
  };
  const onPointerMove: React.PointerEventHandler<HTMLImageElement> = (e) => {
    if (!dragRef.current) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    setPos({
      x: Math.max(0, Math.min(stageSize.w, dragRef.current.x + dx)),
      y: Math.max(0, Math.min(stageSize.h, dragRef.current.y + dy)),
    });
  };
  const onPointerUp: React.PointerEventHandler<HTMLImageElement> = () => {
    dragRef.current = null;
  };

  // EKSPORT PNG
  const exportPng = () => {
    if (!stageRef.current || !bgImgRef.current || !fgImgRef.current) return;

    const canvas = document.createElement("canvas");
    const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
    canvas.width = stageSize.w * dpr;
    canvas.height = stageSize.h * dpr;

    const ctx = canvas.getContext("2d")!;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, stageSize.w, stageSize.h);

    // tło (object-contain, wycentrowane)
    const bg = bgImgRef.current;
    const s = Math.min(
      stageSize.w / bg.naturalWidth,
      stageSize.h / bg.naturalHeight
    );
    const w = bg.naturalWidth * s;
    const h = bg.naturalHeight * s;
    const dx = (stageSize.w - w) / 2;
    const dy = (stageSize.h - h) / 2;
    ctx.drawImage(bg, dx, dy, w, h);

    // grafika z transformacjami
    const w2 = fgDisplayWidth;
    const h2 = fgDisplayHeight;
    ctx.save();
    ctx.translate(pos.x, pos.y);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.drawImage(fgImgRef.current, -w2 / 2, -h2 / 2, w2, h2);
    ctx.restore();

    const a = document.createElement("a");
    a.download = "projekt.png";
    a.href = canvas.toDataURL("image/png");
    a.click();
  };

  return (
    <section className="mx-auto max-w-5xl px-4 py-6">
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <label className="cursor-pointer rounded-md border px-3 py-2 text-sm hover:bg-neutral-50">
          <input
            type="file"
            accept="image/*"
            onChange={onPickBackground}
            className="hidden"
          />
          Dodaj tło
        </label>

        <label
          className={`cursor-pointer rounded-md border px-3 py-2 text-sm ${
            bgUrl ? "hover:bg-neutral-50" : "opacity-50 cursor-not-allowed"
          }`}
        >
          <input
            type="file"
            accept="image/*"
            onChange={onPickForeground}
            className="hidden"
            disabled={!bgUrl}
          />
          Dodaj grafikę
        </label>

        <button
          type="button"
          onClick={exportPng}
          disabled={!bgUrl || !fgUrl}
          className={`ml-auto rounded-md bg-emerald-600 px-4 py-2 text-sm text-white ${
            bgUrl && fgUrl
              ? "hover:bg-emerald-700"
              : "opacity-50 cursor-not-allowed"
          }`}
        >
          Eksportuj PNG
        </button>
      </div>

      <div
        ref={stageRef}
        className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border bg-neutral-100 select-none"
      >
        {/* TŁO */}
        {bgUrl && (
          <img
            ref={bgImgRef}
            src={bgUrl}
            alt="Tło"
            className="absolute inset-0 h-full w-full object-contain pointer-events-none"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          />
        )}

        {/* GRAFIKA */}
        {fgUrl && (
          <>
            <img
              ref={fgImgRef}
              src={fgUrl}
              alt="Grafika"
              className="absolute left-0 top-0 select-none"
              style={{
                width: `${fgDisplayWidth}px`,
                height: `${fgDisplayHeight}px`,
                transform: `translate(${pos.x - fgDisplayWidth / 2}px, ${
                  pos.y - fgDisplayHeight / 2
                }px) rotate(${rotation}deg)`,
                transformOrigin: "center center",
                cursor: dragRef.current ? "grabbing" : "grab",
                // kluczowe na mobile – nie przewijaj strony podczas dragów
                touchAction: "none",
              }}
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
            />

            {/* panele suwaków – UI jak miałeś */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-md bg-white/90 p-3 shadow">
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 text-sm">
                  Skala
                  <input
                    type="range"
                    min={0.2}
                    max={3}
                    step={0.01}
                    value={scale}
                    onChange={(e) => setScale(parseFloat(e.target.value))}
                  />
                </label>
                <label className="flex items-center gap-2 text-sm">
                  Obrót
                  <input
                    type="range"
                    min={-180}
                    max={180}
                    step={1}
                    value={rotation}
                    onChange={(e) => setRotation(parseFloat(e.target.value))}
                  />
                  <span className="w-10 text-right text-xs text-neutral-600">
                    {Math.round(rotation)}°
                  </span>
                </label>
              </div>
            </div>
          </>
        )}

        {!bgUrl && (
          <p className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-white/80 px-3 py-2 text-sm text-neutral-700">
            Najpierw dodaj tło
          </p>
        )}
      </div>
    </section>
  );
}
