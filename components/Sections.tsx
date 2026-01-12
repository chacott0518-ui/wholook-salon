import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

// --- Reusable Animation Component ---
const FadeInUp: React.FC<{ children: React.ReactNode; delay?: number, className?: string }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

// --- HERITAGE SECTION ---
export const Heritage: React.FC = () => {
  return (
    <section id="heritage" className="py-24 md:py-40 px-6 md:px-12 bg-white text-wholook-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <FadeInUp>
          <div className="relative">
            {/* Decorative line */}
            <div className="w-12 h-1 bg-wholook-yellow mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-gray-900">
              가장 나다운 아름다움을<br />
              발견하는 여정
            </h2>
            <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
              <p>
                WhoLook은 단순한 헤어 스타일링을 넘어, 개인의 고유한 분위기와 라이프스타일을 분석하여
                최적의 디자인을 제안하는 퍼스널 브랜딩 살롱입니다.
              </p>
              <p>
                햇살이 스며드는 따뜻한 우드 톤의 공간에서, 오직 당신만을 위해 준비된
                프라이빗한 서비스를 경험해보세요. 우리는 트렌드를 쫓기보다 당신이라는 브랜드의 가치를 높입니다.
              </p>
            </div>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.2} className="relative h-[600px] w-full bg-gray-100 overflow-hidden">
          {/* Verified Stable Image: Clean Interior */}
          <img
            src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop"
            alt="WhoLook Heritage"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
          />
        </FadeInUp>
      </div>
    </section>
  );
};

// --- ARTISTS SECTION ---
const ArtistCard: React.FC<{ name: string; role: string; img: string; delay: number; imgScale?: string; position?: string }> = ({ name, role, img, delay, imgScale = "scale-100", position = "object-bottom" }) => (
  <FadeInUp delay={delay} className="group cursor-pointer">
    {/* Background changed to stylish gray (zinc-300) for contrast */}
    <div className="relative overflow-hidden mb-6 aspect-[3/4] bg-zinc-300 rounded-sm">
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10" />
      <img
        src={img}
        alt={name}
        className={`w-full h-full object-cover ${position} transition-transform duration-700 group-hover:scale-[1.02] ${imgScale}`}
      />
    </div>
    <h3 className="text-xl font-bold mb-1 text-gray-900 tracking-wider">{name}</h3>
    <p className="text-gray-600 text-sm tracking-widest uppercase font-medium">{role}</p>
  </FadeInUp>
);

export const Artists: React.FC = () => {
  // Configured to balance face sizes. Jangmi was too big, so scaled down.
  const artists = [
    {
      name: "JANGMI",
      role: "DESIGNER",
      img: "https://i.imgur.com/UeHVRye.png",
      imgScale: "scale-[0.85] origin-bottom", // Reduced scale to match others
      position: "object-bottom"
    },
    {
      name: "SIYOON",
      role: "DESIGNER",
      img: "https://i.imgur.com/p4r4NtC.png",
      imgScale: "scale-[0.95] origin-bottom", // Slight adjustment
      position: "object-bottom"
    },
    {
      name: "JISOO",
      role: "DESIGNER",
      img: "https://i.imgur.com/P79ANdJ.png",
      imgScale: "scale-100 origin-bottom",
      position: "object-bottom"
    },
  ];

  return (
    <section id="artists" className="py-24 px-6 md:px-12 bg-[#F5F5F3]">
      <div className="max-w-7xl mx-auto">
        <FadeInUp className="text-center mb-20">
          <span className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase">Our Team</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">WhoLook Artists</h2>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artists.map((artist, idx) => (
            <ArtistCard key={idx} {...artist} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- STYLES SECTION ---
interface StyleItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags?: string[];
}

export const Styles: React.FC = () => {
  // Verified Stable Images: Hair & Beauty
  const styleItems: StyleItem[] = [
    {
      id: 1,
      title: "올리브브라운",
      description: "애쉬브라운, 레이어드컷, 일반스타일, 여성 롱, 카키브라운",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop",
      tags: ["인기"]
    },
    {
      id: 2,
      title: "체스넛브라운",
      description: "애쉬브라운, 레이어드컷, 일반스타일, 여성 롱, 브라운",
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop",
      tags: ["인기"]
    },
    {
      id: 3,
      title: "코랄레드",
      description: "일반스타일, 여성 롱, 핑크브라운, 레드와인",
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&auto=format&fit=crop",
      tags: ["인기"]
    },
    {
      id: 4,
      title: "애쉬브라운",
      description: "애쉬브라운, 일반스타일, 여성 롱, 밀크브라운",
      image: "https://i.pinimg.com/736x/91/79/bd/9179bd00676f53c4845c5cdf279ff286.jpg",
      tags: ["인기"]
    },
    {
      id: 5,
      title: "빈티지펌",
      description: "레이어드컷, 히피펌(젤리펌), 일반스타일, 미디엄 기장",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
      tags: ["인기"]
    },
    {
      id: 6,
      title: "젤리펌",
      description: "레이어드컷, 히피펌(젤리펌), 일반스타일, 러블리 무드",
      image: "https://i.pinimg.com/736x/01/68/28/0168288aced1a6a7aaf45d3d89b1125f.jpg",
      tags: ["인기"]
    },
    {
      id: 7,
      title: "굵은히피펌",
      description: "레이어드컷, 히피펌(젤리펌), 일반스타일, 롱 웨이브",
      image: "https://images.unsplash.com/photo-1523264939339-c89f9dadde2e?q=80&w=800&auto=format&fit=crop",
      tags: ["인기"]
    },
    {
      id: 8,
      title: "슬릭컷",
      description: "슬릭컷, 매직, 스트레이트, 시크, 롱 헤어",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
      tags: ["인기"]
    },
  ];

  return (
    <section id="style" className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <FadeInUp className="text-center mb-16">
          <span className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase">Trend Pick</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">Style Book</h2>
        </FadeInUp>

        {/* 
          Grid Layout:
          Mobile: 2 columns
          Tablet: 3 columns
          Desktop: 4 columns
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-12">
          {styleItems.map((item, index) => (
            <FadeInUp key={item.id} delay={index * 0.1}>
              <div className="group cursor-pointer flex flex-col h-full">
                {/* Image Container */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-gray-100">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 z-10" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Tag (Popular) */}
                  {item.tags?.includes("인기") && (
                    <div className="absolute top-3 left-3 z-20">
                      <span className="bg-[#E65F9C] text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                        인기
                      </span>
                    </div>
                  )}

                  {/* Image Count Badge */}
                  <div className="absolute bottom-3 right-3 z-20">
                    <div className="bg-black/40 text-white text-[10px] font-bold px-1.5 py-0.5 rounded backdrop-blur-sm">
                      +
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-black transition-colors mb-1.5 truncate">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 leading-snug line-clamp-2 font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- REVIEWS SECTION ---
export const Reviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      content: "초딩때 이후로 첫 펌이었는데 머리가 너무 얇고 힘이 없어서 첫 시술에 제대로 컬이 안나왔어요ㅠ 근데 바로 다음주에 꼼꼼하게 다시 해주셔서 그래도 제 머리상태에서 예쁘게 펌이 된 거 같아서 너무 만족합니다! 가격도 꽤 합리적이라는 생각이들고 디자이너분들이 다들 친절하셔서 넘 좋았어요! 겨울에 히피로 포근하고 따뜻한 무드내면 넘 귀여운거 같기도 하네용 !! 꼼꼼하게 신경써서 시술해주셔서 감사합니다~~ 💗💗",
      user: "jiwo****",
      date: "2024.01.15"
    },
    {
      id: 2,
      content: "색을 정하고 가지 않았는데 원하는 내용들 말씀 드렸더니 진짜 예쁜 색으로 알아서 척척 만들어주셨어요 ㅎㅎ 손도 빠르셔서 시간도 여유 있었어요 빛 비칠땐 밝아서 예쁘고 평소엔 자연스러워서 더 마음에 듭니다",
      user: "sunh****",
      date: "2024.01.20"
    },
    {
      id: 3,
      content: "상담해주실 때 디테일한 부분, 셀프 스타일링시 장단점 명확히 알려주셔서 너무 도움되고 좋았어요 🤍 결과까지 생각한대로 나오고, 관리 방법도 자세히 알려주셔서 시간과 돈이 전혀 아깝지 않았던 아주 만족스러운 시술이었어요 감사합니다 🎀💗",
      user: "mini****",
      date: "2024.02.01"
    }
  ];

  return (
    <section id="review" className="py-24 px-6 md:px-12 bg-[#F9F9F9] border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <FadeInUp className="text-center mb-16">
          <span className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase">Voices</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">Real Reviews</h2>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <FadeInUp key={review.id} delay={idx * 0.1}>
              <div className="bg-white p-8 md:p-10 h-full flex flex-col rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 relative border border-gray-100">
                {/* Decorative Quote Icon */}
                <div className="absolute top-8 left-8 text-wholook-yellow opacity-40">
                  <Quote size={40} fill="currentColor" className="transform rotate-180" />
                </div>

                {/* Rating */}
                <div className="flex mb-6 z-10 justify-end">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#1a1a1a" className="text-wholook-dark ml-0.5" />
                  ))}
                </div>

                {/* Content */}
                <div className="flex-grow z-10 mt-2">
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base font-normal break-keep">
                    {review.content}
                  </p>
                </div>

                {/* Footer info */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-xs tracking-wider text-gray-400">
                  <span className="font-bold text-gray-900">{review.user}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- SIGNATURE SECTION ---
export const Signature: React.FC = () => {
  const [activeTab, setActiveTab] = useState('cut');

  const categories = [
    { id: 'cut', label: 'CUT' },
    { id: 'perm', label: 'PERM' },
    { id: 'color', label: 'COLOR' },
    { id: 'clinic', label: 'CLINIC' },
    { id: 'others', label: 'OTHERS' },
  ];

  const menuItems: Record<string, { en: string; kr: string; price: string }[]> = {
    cut: [
      { en: "Men's Cut", kr: "남자컷", price: "33,000" },
      { en: "Women's Cut", kr: "여자컷", price: "44,000" },
      { en: "Bangs Cut", kr: "앞머리컷", price: "15,000" },
      { en: "Junior Cut", kr: "주니어컷", price: "22,000" },
    ],
    perm: [
      { en: "Cold Perm", kr: "콜드펌", price: "110,000" },
      { en: "Bangs Perm", kr: "앞머리펌", price: "22,000" },
      { en: "Down Perm", kr: "다운펌", price: "25,000" },
      { en: "Root Perm", kr: "뿌리펌", price: "88,000" },
      { en: "Heat Perm", kr: "열펌", price: "140,000" },
      { en: "Magic Straight", kr: "매직/슬릭펌", price: "180,000" },
      { en: "Root Magic", kr: "뿌리매직", price: "99,000" },
      { en: "Magic Setting", kr: "매직셋팅펌", price: "250,000" },
    ],
    color: [
      { en: "Basic Color", kr: "베이직염색", price: "110,000" },
      { en: "Root Color", kr: "뿌리염색", price: "77,000" },
      { en: "Bleach", kr: "탈색", price: "150,000" },
      { en: "Root Bleach", kr: "뿌리탈색", price: "88,000" },
      { en: "Design Color", kr: "디자인염색", price: "180,000" },
    ],
    clinic: [
      { en: "Basic Clinic", kr: "베이직 클리닉", price: "66,000" },
      { en: "Premium Clinic", kr: "프리미엄 클리닉", price: "99,000" },
      { en: "Restoration Clinic", kr: "복구 클리닉", price: "150,000" },
    ],
    others: [
      { en: "Blow Dry", kr: "드라이", price: "22,000" },
      { en: "Upstyle", kr: "업스타일", price: "55,000" },
      { en: "Shampoo", kr: "샴푸", price: "11,000" },
    ],
  };

  return (
    <section id="signature" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <FadeInUp className="text-center mb-16">
          <span className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase">Price List</span>
          <h2 className="text-4xl font-bold mt-4 mb-6 text-gray-900">Signature Menu</h2>
          <p className="text-gray-800 font-normal text-base leading-relaxed">
            1:1 맞춤 상담을 통해 고객님께<br className="block md:hidden" /> 가장 어울리는 스타일을 제안해 드립니다.
          </p>
        </FadeInUp>

        {/* Tabs */}
        <FadeInUp delay={0.1} className="mb-12 border-b border-gray-200">
          <div
            className="flex overflow-x-auto md:justify-center gap-6 md:gap-8 pb-1 px-4 md:px-0 -mx-4 md:mx-0 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-2 py-3 text-sm md:text-base tracking-widest transition-colors duration-300 outline-none whitespace-nowrap shrink-0 ${activeTab === cat.id ? 'text-wholook-dark font-bold' : 'text-gray-500 hover:text-gray-800'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </FadeInUp>

        {/* Menu Items */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {menuItems[activeTab].map((item, idx) => (
                <div key={idx} className="flex items-end justify-between border-b border-gray-100 pb-4 group hover:border-gray-300 transition-colors">
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold text-gray-900 mb-1">{item.en}</span>
                    <span className="text-sm text-gray-600 tracking-tight">{item.kr}</span>
                  </div>
                  <div className="text-lg font-medium tracking-wide text-gray-900 whitespace-nowrap ml-4">
                    <span className="text-[10px] mr-1 text-gray-500 align-top font-sans font-bold">KRW</span>
                    {item.price}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Note */}
        <FadeInUp delay={0.3} className="mt-16 text-sm text-gray-600 font-normal text-center border-t border-gray-200 pt-8 leading-loose bg-gray-50 py-6 rounded-sm">
          <p className="mb-1">
            <span className="font-bold text-gray-800">기장 추가 요금 안내</span>
          </p>
          <p>
            어깨 아래 +33,000원 &nbsp;|&nbsp; 가슴 아래 +77,000원
          </p>
          <p className="mt-2 text-gray-500 text-xs">
            * 모든 시술 가격은 기본 가격 기준이며, 디자이너 직급 및 모발 상태에 따라 추가 요금이 발생할 수 있습니다.
          </p>
        </FadeInUp>
      </div>
    </section>
  );
};

// --- BOOKING SECTION ---
export const Booking: React.FC = () => {
  return (
    <section id="booking" className="py-24 px-6 md:px-12 bg-wholook-dark text-white relative">
      <div className="max-w-5xl mx-auto text-center">
        <FadeInUp>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">Visit Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white/90 mb-20 font-normal">
            <div className="flex flex-col items-center group">
              <span className="text-xs uppercase tracking-widest text-wholook-yellow mb-6 group-hover:scale-110 transition-transform font-bold">Location</span>
              <span className="leading-loose">서울 성동구 성수이로 84 4층</span>
            </div>
            <div className="flex flex-col items-center group">
              <span className="text-xs uppercase tracking-widest text-wholook-yellow mb-6 group-hover:scale-110 transition-transform font-bold">Operation Hour</span>
              <span className="leading-loose">10:00 AM - 08:00 PM<br />(Every Monday Off)</span>
            </div>
            <div className="flex flex-col items-center group">
              <span className="text-xs uppercase tracking-widest text-wholook-yellow mb-6 group-hover:scale-110 transition-transform font-bold">Contact</span>
              <span className="leading-loose">
                <a href="tel:050714586203" className="hover:text-wholook-yellow transition-colors">0507-1458-6203</a>
              </span>
            </div>
          </div>

          <div>
            <a
              href="https://map.naver.com/p/entry/place/2039421472?lng=127.0566416&lat=37.5424167&placePath=/stylist?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202601121635&locale=ko&svcName=map_pcv5&entry=plt&searchType=place&c=15.00,0,0,0,dh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-wholook-yellow text-wholook-dark px-16 py-5 font-bold tracking-widest hover:bg-white transition-colors duration-300 rounded-sm"
            >
              BOOK NOW
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};