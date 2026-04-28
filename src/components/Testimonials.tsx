import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "김지수",
      role: "대학생",
      text: "처음에는 외국인과 대화하는 게 너무 두려웠는데, 선생님이 친절하게 이끌어주셔서 이제는 수업 시간이 기다려져요. 한 달 만에 말문이 트이는 게 느껴집니다!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=100"
    },
    {
      name: "이민호",
      role: "직장인",
      text: "바쁜 직장 생활 중에 학원 다니기 힘들었는데, 집에서 편하게 수업 들을 수 있어 너무 좋아요. 비즈니스 코스 덕분에 영어 회의 자신감이 생겼습니다.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100"
    },
    {
      name: "박서연",
      role: "학부모",
      text: "아이가 영어를 공부로만 생각하다가 이토크를 시작하고 나서는 놀이처럼 즐거워해요. 원어민 선생님과의 유대감이 학습 효과를 높여주는 것 같습니다.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=100"
    }
  ];

  return (
    <section className="bg-gray-50 overflow-hidden">
      <div className="section-padding relative">
        <Quote className="absolute top-12 left-12 text-lime-100 w-32 h-32 -z-0" />
        
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-lime-600 font-bold mb-4 uppercase tracking-widest">수강후기</h2>
          <h3 className="text-3xl md:text-4xl font-bold">수강생들의 생생한 후기</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-lime-100"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h5 className="font-bold">{review.name}님</h5>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
