
import React, { useState } from 'react';
import { GameGenre } from '../types';

interface StartScreenProps {
  onStart: (name: string, genre: GameGenre, gender: string) => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('Nam');
  const [genre, setGenre] = useState<GameGenre>(GameGenre.CULTIVATION);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onStart(name, genre, gender);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-ink-950 text-parchment-100 p-4 font-sans relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(212,175,55,0.05)_0%,_transparent_60%)] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      <div className="max-w-md w-full space-y-8 bg-ink-900/80 backdrop-blur-xl p-10 rounded-2xl border border-white/10 shadow-2xl relative z-10">
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 tracking-tight drop-shadow-sm">The Infinity Tale</h1>
          <p className="text-parchment-400 text-sm font-medium tracking-wide">Bước vào thế giới huyễn tưởng, nghịch thiên cải mệnh.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-xs font-bold text-parchment-300 uppercase tracking-wider">Đạo Hiệu (Tên nhân vật)</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-ink-950/50 border border-white/10 rounded-lg px-4 py-3 text-parchment-100 placeholder-ink-600 focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all shadow-inner"
              placeholder="Vd: Hàn Lập, Bạch Tiểu Thuần..."
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold text-parchment-300 uppercase tracking-wider">Giới Tính</label>
            <div className="flex space-x-3">
              {['Nam', 'Nữ'].map((g) => (
                <label key={g} className={`flex-1 cursor-pointer border rounded-lg p-3 flex items-center justify-center transition-all font-medium ${
                  gender === g 
                    ? 'bg-gold-500/10 border-gold-500 text-gold-400 shadow-[0_0_15px_rgba(212,175,55,0.15)]' 
                    : 'bg-ink-950/50 border-white/10 hover:border-white/30 text-parchment-400 hover:text-parchment-200'
                }`}>
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={gender === g}
                    onChange={(e) => setGender(e.target.value)}
                    className="hidden"
                  />
                  <span>{g}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold text-parchment-300 uppercase tracking-wider">Thế Giới (Thể loại)</label>
            <div className="grid grid-cols-2 gap-3">
              {Object.values(GameGenre).map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGenre(g)}
                  className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                    genre === g
                      ? 'bg-gold-500/10 border-gold-500 text-gold-400 shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                      : 'bg-ink-950/50 border-white/10 hover:border-white/30 text-parchment-400 hover:text-parchment-200'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-ink-950 font-bold py-3.5 px-4 rounded-lg transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transform hover:-translate-y-0.5"
          >
            Khởi Tạo Nhân Vật
          </button>
        </form>
        
        <div className="text-[10px] text-center text-ink-500 uppercase tracking-widest pt-4 border-t border-white/5">
          <p>Lưu ý: Game sử dụng AI tạo sinh, nội dung có thể không đoán trước được.</p>
        </div>
      </div>
    </div>
  );
};