'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, KeyRound, ShieldCheck, LogOut, CheckCircle2, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { useProducts } from '../context/ProductContext';

interface ChesterAdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChesterAdminLoginModal: React.FC<ChesterAdminLoginModalProps> = ({ isOpen, onClose }) => {
  const { isAdmin, login, logout } = useProducts();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!password.trim()) {
      setError('Lütfen yönetici şifresini giriniz.');
      return;
    }

    const success = login(password);
    if (success) {
      setSuccessMsg('Yönetici girişi başarılı! Düzenleme modu aktif edildi.');
      setPassword('');
      setTimeout(() => {
        setSuccessMsg('');
        onClose();
      }, 750);
    } else {
      setError('Hatalı şifre girdiniz! Lütfen tekrar deneyiniz.');
    }
  };

  const handleLogout = () => {
    logout();
    setSuccessMsg('Yönetici oturumu kapatıldı.');
    setTimeout(() => {
      setSuccessMsg('');
      onClose();
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 15 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="relative w-full max-w-md bg-white text-stone-900 rounded-3xl shadow-2xl border border-stone-200 overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 bg-[#1C1917] text-white flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-[#B86B35] text-white flex items-center justify-center shadow-lg">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-luxe text-xl font-bold">
                    Yönetici & Admin Paneli
                  </h3>
                  <p className="text-[11px] text-stone-300 font-light">
                    Chester Time Ürün Yönetim Sistemi
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-7 space-y-5">
              {isAdmin ? (
                /* Authenticated State */
                <div className="space-y-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                    <ShieldCheck className="w-9 h-9" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-lg text-[#1C1917]">
                      Yönetici Modu Aktif
                    </h4>
                    <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                      Şu an ürün ekleme, tüm kategorilerdeki ürünleri düzenleme ve kaldırma yetkisine sahipsiniz.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-200 flex flex-col gap-2.5">
                    <button
                      onClick={() => {
                        onClose();
                        const vitrin = document.getElementById('vitrin');
                        if (vitrin) vitrin.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full py-3 rounded-full bg-[#B86B35] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#944D1E] transition-colors shadow"
                    >
                      Ürün Vitrinine Git
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full py-2.5 rounded-full border border-red-300 text-red-600 hover:bg-red-50 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Yönetici Oturumunu Kapat</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Login Form */
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                      Koltuk modelleri vitrinine yeni ürün eklemek veya mevcut modelleri düzenlemek/kaldırmak için yönetici şifrenizi giriniz.
                    </p>

                    {error && (
                      <div className="flex items-center space-x-2 p-3 rounded-xl bg-red-50 text-red-700 text-xs border border-red-200 mb-3">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    {successMsg && (
                      <div className="flex items-center space-x-2 p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs border border-emerald-200 mb-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{successMsg}</span>
                      </div>
                    )}

                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                      Yönetici Şifresi
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Şifrenizi girin..."
                        className="w-full pl-10 pr-10 py-3 rounded-2xl border border-stone-300 text-sm focus:outline-none focus:border-[#B86B35] focus:ring-2 focus:ring-[#B86B35]/20 bg-stone-50"
                        autoFocus
                      />
                      <KeyRound className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-3.5 text-stone-400 hover:text-stone-700 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-[#1C1917] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B86B35] transition-all shadow-lg flex items-center justify-center space-x-2"
                    >
                      <Lock className="w-4 h-4 text-[#F3C287]" />
                      <span>Giriş Yap & Yönetimi Aç</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
