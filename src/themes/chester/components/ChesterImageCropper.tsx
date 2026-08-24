'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, RotateCw, Check, X, Crop, Move, RefreshCw } from 'lucide-react';

interface ChesterImageCropperProps {
  imageSrc: string;
  onCropComplete: (croppedDataUrl: string) => void;
  onCancel: () => void;
  aspectRatio?: number; // width / height, default 4/3 = 1.333
}

export const ChesterImageCropper: React.FC<ChesterImageCropperProps> = ({
  imageSrc,
  onCropComplete,
  onCancel,
  aspectRatio = 4 / 3, // 4:3 standard for Chester showcase cards
}) => {
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0); // 0, 90, 180, 270
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Reset transform when imageSrc changes
  useEffect(() => {
    setZoom(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
  }, [imageSrc]);

  // Pointer drag handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch (_) {}
  };

  // Perform canvas crop
  const handleCrop = () => {
    const img = imageRef.current;
    const container = containerRef.current;
    if (!img || !container) return;

    const outputWidth = 1200;
    const outputHeight = outputWidth / aspectRatio; // 900 for 4:3

    const canvas = document.createElement('canvas');
    canvas.width = outputWidth;
    canvas.height = outputHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.imageSmoothingQuality = 'high';
    ctx.imageSmoothingEnabled = true;

    // Background fill
    ctx.fillStyle = '#FAF7F2';
    ctx.fillRect(0, 0, outputWidth, outputHeight);

    // Save context state
    ctx.save();

    // Move to center of canvas
    ctx.translate(outputWidth / 2, outputHeight / 2);

    // Apply rotation
    ctx.rotate((rotation * Math.PI) / 180);

    // Compute scale relative to display container
    const containerRect = container.getBoundingClientRect();
    const scaleFactor = outputWidth / containerRect.width;

    // Apply translation from user pan
    ctx.translate(position.x * scaleFactor, position.y * scaleFactor);

    // Apply zoom
    ctx.scale(zoom, zoom);

    // Draw image centered
    const imgAspect = img.naturalWidth / img.naturalHeight;
    let drawWidth = outputWidth;
    let drawHeight = outputWidth / imgAspect;

    if (imgAspect < aspectRatio) {
      drawHeight = outputHeight;
      drawWidth = outputHeight * imgAspect;
    }

    ctx.drawImage(
      img,
      -drawWidth / 2,
      -drawHeight / 2,
      drawWidth,
      drawHeight
    );

    ctx.restore();

    const croppedDataUrl = canvas.toDataURL('image/jpeg', 0.92);
    onCropComplete(croppedDataUrl);
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const handleReset = () => {
    setZoom(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className="bg-stone-900 text-white rounded-3xl p-5 sm:p-6 space-y-5 border border-stone-700 shadow-2xl">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-stone-800 pb-3">
        <div className="flex items-center space-x-2">
          <Crop className="w-4 h-4 text-[#F3C287]" />
          <span className="font-bold text-sm text-[#F3C287]">Görseli Vitrine Göre Kırp & Hizala (4:3)</span>
        </div>
        <button
          type="button"
          onClick={onCancel}
          className="p-1.5 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors"
          aria-label="Vazgeç"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Interactive Crop Frame Container */}
      <div className="flex justify-center">
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden bg-black border-2 border-[#B86B35] cursor-grab active:cursor-grabbing select-none shadow-2xl touch-none"
        >
          {/* Draggable & Scalable Image */}
          <div
            className="w-full h-full flex items-center justify-center pointer-events-none"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg) scale(${zoom})`,
              transition: isDragging ? 'none' : 'transform 0.1s ease-out',
            }}
          >
            <img
              ref={imageRef}
              src={imageSrc}
              alt="Kırpılacak Görsel"
              className="max-w-none max-h-none pointer-events-none select-none object-contain"
              style={{
                width: '100%',
                height: '100%',
              }}
              draggable={false}
            />
          </div>

          {/* Rule of Thirds Crop Overlay Grid */}
          <div className="absolute inset-0 pointer-events-none grid grid-cols-3 grid-rows-3 border border-white/30">
            <div className="border-r border-b border-white/20"></div>
            <div className="border-r border-b border-white/20"></div>
            <div className="border-b border-white/20"></div>
            <div className="border-r border-b border-white/20"></div>
            <div className="border-r border-b border-white/20"></div>
            <div className="border-b border-white/20"></div>
            <div className="border-r border-white/20"></div>
            <div className="border-r border-white/20"></div>
            <div></div>
          </div>

          {/* Hint Overlay */}
          <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-center pointer-events-none">
            <p className="text-[11px] text-stone-200 flex items-center justify-center space-x-1.5 font-medium">
              <Move className="w-3 h-3 text-[#F3C287]" />
              <span>Görseli basılı tutup kaydırarak tam çerçeveye sığdırın</span>
            </p>
          </div>
        </div>
      </div>

      {/* Controls: Zoom & Rotate & Reset */}
      <div className="space-y-4 pt-1">
        {/* Zoom Slider */}
        <div className="flex items-center space-x-3 text-xs">
          <ZoomOut className="w-4 h-4 text-stone-400 flex-shrink-0" />
          <input
            type="range"
            min="0.8"
            max="3"
            step="0.05"
            value={zoom}
            onChange={(e) => setZoom(parseFloat(e.target.value))}
            className="flex-1 accent-[#B86B35] h-1.5 bg-stone-700 rounded-lg cursor-pointer"
          />
          <ZoomIn className="w-4 h-4 text-stone-400 flex-shrink-0" />
          <span className="font-mono text-stone-300 w-10 text-right">{Math.round(zoom * 100)}%</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-stone-800">
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={handleRotate}
              className="px-3 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>Döndür (90°)</span>
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-3 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Sıfırla</span>
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 rounded-full border border-stone-700 text-stone-300 hover:bg-stone-800 text-xs font-bold uppercase transition-colors"
            >
              Vazgeç
            </button>
            <button
              type="button"
              onClick={handleCrop}
              className="px-5 py-2 rounded-full bg-[#B86B35] hover:bg-[#944D1E] text-white text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 transition-all shadow-lg cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Kırp & Onayla</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
