import { motion } from 'motion/react';
import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-lime-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-lime-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 -left-20 w-96 h-96 bg-lime-100 rounded-full blur-3xl opacity-30"></div>

      <div className="section-padding grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-lime-100 text-lime-600 font-bold text-xs md:text-sm mb-6 tracking-wide uppercase">
            영어 말하기 대회 전문 화상영어
          </span>
          <h1 className="text-[26px] xs:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 tracking-tight notranslate" translate="no">
            영어가 즐거워지는 시간,<br className="hidden sm:block" />
            <span className="text-lime-600">이토크</span>와 시작하세요
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
            검증된 원어민 강사진과 1:1 맞춤형 수업으로<br className="hidden md:block" />
            당신의 영어 실력을 가장 빠르게 향상시켜 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdp91KLm-Yl8f-tGMg1sAH9v4cvHz8oloiUBqhXb8HYpEHZ_Q/viewform?usp=header" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2 px-10"
            >
              무료 레벨테스트 신청 <ChevronRight size={20} />
            </a>
            <a 
              href="https://blog.naver.com/etalk690/224262515706"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center gap-2 px-10"
            >
              <Play size={18} fill="currentColor" /> 수업 샘플 보기
            </a>
          </div>
          
          <div className="mt-12 flex items-center space-x-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={[
                    "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=100",
                    "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=100",
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100",
                    "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=100"
                  ][i-1]} 
                  alt="Korean Student Avatar" 
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p className="text-sm text-gray-500">
              <span className="font-bold text-gray-800">8,000+</span> 명의 수강생이 선택했습니다
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=800" 
              alt="Video English Class Interface" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Play size={24} className="text-white ml-1" fill="white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">실시간 수업</p>
                  <p className="text-sm font-bold text-gray-800">원어민 선생님과 실시간 대화 중</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl z-20 hidden lg:block"
          >
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-bold text-sm">실시간 수강 가능</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
