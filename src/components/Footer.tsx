import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center mb-6">
              <Logo variant="dark" />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              글로벌 시대를 선도하는 1:1 맞춤형 화상영어 전문 브랜드입니다. 당신의 꿈을 향한 영어 실력 향상, 이토크가 함께합니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-lime-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-lime-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-lime-600 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">고객센터</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-lime-400" />
                <div className="flex items-center gap-1.5 translate-no" translate="no">
                  <a href="tel:070-8701-6768" className="hover:text-lime-400 transition-colors">070-8701-6768</a>
                  <span className="opacity-50">/</span>
                  <a href="tel:010-3938-6768" className="hover:text-lime-400 transition-colors">010-3938-6768</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-lime-400" />
                <span>chy690@etalk.or.kr</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-lime-400 mt-1" />
                <span>서울시 동작구 노량진로 140<br />메가스터디 타워 2층</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">빠른 링크</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-lime-400 transition-colors">회사 소개</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">이용 약관</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">개인정보 처리방침</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">자주 묻는 질문</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">뉴스레터 구독</h4>
            <p className="text-gray-400 text-sm mb-4">학습 팁과 이벤트 소식을 받아보세요.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="이메일 주소" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-lime-600 w-full"
              />
              <button className="bg-lime-600 px-4 py-2 rounded-r-lg hover:bg-lime-700 transition-colors">
                구독
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 text-center text-gray-500 text-xs">
          <p>© 2026 이토크 화상영어. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
