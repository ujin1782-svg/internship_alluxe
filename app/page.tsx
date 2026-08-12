'use client';

import React, { useState } from 'react';

import img01 from './image/img01.jpeg'; 
// @ts-ignore
import img02 from './image/img02.jpeg';
// @ts-ignore
import img03 from './image/img03.png';

export default function AlluxeInternshipPage() {
  const [lang, setLang] = useState<'ko' | 'ja'>('ko');
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#d2deE0] text-gray-800 selection:bg-[#8B0000] selection:text-white pb-28">
      
      {/* 폰트 및 애니메이션 CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,600&family=Noto+Sans+KR:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;700&display=swap');
        
        .font-alluxe { font-family: 'Playfair Display', serif; font-style: italic; }
        .font-body-ko { font-family: 'Noto Sans KR', sans-serif; }
        .font-body-ja { font-family: 'Noto Sans JP', sans-serif; }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 8s infinite alternate ease-in-out; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .float-delay-1 { animation-delay: 1.2s; }
        .float-delay-2 { animation-delay: 2.5s; }
        .float-delay-3 { animation-delay: 3.8s; }
        .float-delay-4 { animation-delay: 0.7s; }
        .float-delay-5 { animation-delay: 4.2s; }
        
        .fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .glass-table th {
          background-color: rgba(139, 0, 0, 0.05);
          color: #8B0000;
          font-weight: 700;
        }
        .glass-table tr {
          border-bottom: 1px solid rgba(255, 255, 255, 0.6);
          transition: background-color 0.2s ease;
        }
        .glass-table tr:hover {
          background-color: rgba(255, 255, 255, 0.4);
        }
        .glass-table tr:last-child {
          border-bottom: none;
        }
      `}} />

      {/* 배경 장식 요소 */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#8B0000] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob pointer-events-none"></div>
      <div className="absolute top-[30%] right-[-10%] w-80 h-80 bg-[#5c0000] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-[#a30000] rounded-full mix-blend-multiply filter blur-[100px] opacity-15 animate-blob animation-delay-4000 pointer-events-none"></div>
      <div className="absolute top-[20%] left-[10%] w-12 h-12 border-4 border-[#8B0000]/20 rounded-lg animate-float pointer-events-none"></div>
      <div className="absolute top-[40%] left-[5%] w-6 h-6 bg-[#8B0000]/15 rounded-full animate-float float-delay-4 pointer-events-none"></div>
      <div className="absolute bottom-[15%] left-[15%] w-10 h-10 bg-[#8B0000]/10 rounded-full animate-float float-delay-2 pointer-events-none"></div>
      <div className="absolute bottom-[40%] left-[2%] w-14 h-14 border-4 border-[#8B0000]/10 rounded-lg rotate-45 animate-float float-delay-3 pointer-events-none"></div>
      <div className="absolute top-[10%] right-[25%] w-8 h-8 rotate-45 bg-[#8B0000]/10 animate-float float-delay-1 pointer-events-none"></div>
      <div className="absolute top-[25%] right-[5%] w-24 h-24 border-2 border-[#8B0000]/10 rounded-full animate-float float-delay-5 pointer-events-none"></div>
      <div className="absolute top-[60%] right-[15%] w-16 h-16 border-4 border-[#8B0000]/15 rounded-full animate-float float-delay-2 pointer-events-none"></div>
      <div className="absolute top-[5%] left-[40%] w-4 h-4 bg-[#8B0000]/20 rounded-full animate-float float-delay-3 pointer-events-none"></div>
      <div className="absolute top-[75%] left-[30%] w-8 h-8 border-4 border-[#8B0000]/10 rounded-full animate-float float-delay-5 pointer-events-none"></div>

      <div className={`relative z-10 container mx-auto px-4 md:px-6 py-16 max-w-6xl flex flex-col items-center justify-center min-h-screen ${lang === 'ko' ? 'font-body-ko' : 'font-body-ja'}`}>
        
        {/* 헤더 및 언어 전환 */}
        <header className="text-center mb-10 fade-in-up w-full">
          <h1 className="text-6xl md:text-8xl font-alluxe text-[#8B0000] mb-8 tracking-widest drop-shadow-sm">
            ALLUXE
          </h1>
          <div className="inline-flex bg-white/50 backdrop-blur-md rounded-full p-1.5 shadow-md border border-white/60">
            <button onClick={() => setLang('ko')} className={`px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 ${lang === 'ko' ? 'bg-[#8B0000] text-white shadow-lg transform scale-105' : 'text-[#8B0000]/70 hover:bg-[#8B0000]/10 hover:text-[#8B0000]'}`}>
              한국어
            </button>
            <button onClick={() => setLang('ja')} className={`px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 ${lang === 'ja' ? 'bg-[#8B0000] text-white shadow-lg transform scale-105' : 'text-[#8B0000]/70 hover:bg-[#8B0000]/10 hover:text-[#8B0000]'}`}>
              日本語
            </button>
          </div>
        </header>

        {/* =========================================
            [추가] 작성자 소개 섹션
        ========================================= */}
        <div className="w-full max-w-4xl bg-white/50 backdrop-blur-xl rounded-[2rem] shadow-lg border border-white/60 p-6 md:p-8 mb-10 fade-in-up flex flex-col md:flex-row items-center gap-8" style={{ animationDelay: '0.1s' }}>
          
          {/* 프로필 사진 */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0">
            <img 
              src={typeof img01 === 'string' ? img01 : (img01 as any).src || img01} 
              alt={lang === 'ko' ? '작성자 프로필 사진' : '作成者のプロフィール写真'}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* 인적사항 정보 */}
          <div className="text-center md:text-left flex-1">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              {lang === 'ko' ? '정우진' : 'チョン・ウジン'}
            </h2>
            
            <div className="flex flex-col space-y-3 text-gray-700 text-lg">
              <p className="flex items-center justify-center md:justify-start">
                <span className="mr-3 text-2xl">🎓</span>
                <span className="font-medium">{lang === 'ko' ? '전남대학교' : '全南大学'}</span>
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <span className="mr-3 text-2xl">💻</span>
                <span className="font-medium">{lang === 'ko' ? '소프트웨어 전공' : 'ソフトウェア専攻'}</span>
              </p>
            </div>
          </div>
        </div>

        {/* 슬라이드 탭 */}
        <div className="flex space-x-4 mb-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
          <button 
            onClick={() => setCurrentSlide(0)}
            className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 flex items-center shadow-sm ${currentSlide === 0 ? 'bg-white text-[#8B0000] border-2 border-[#8B0000]' : 'bg-white/50 text-gray-500 hover:bg-white border-2 border-transparent'}`}
          >
            📝 {lang === 'ko' ? '인턴십 소개' : 'インターンシップ紹介'}
          </button>
          <button 
            onClick={() => setCurrentSlide(1)}
            className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 flex items-center shadow-sm ${currentSlide === 1 ? 'bg-white text-[#8B0000] border-2 border-[#8B0000]' : 'bg-white/50 text-gray-500 hover:bg-white border-2 border-transparent'}`}
          >
            📅 {lang === 'ko' ? '인턴십 일정표' : 'インターンシップ日程表'}
          </button>
        </div>

        {/* 메인 콘텐츠 영역 (슬라이드 0, 1) */}
        <main className="w-full bg-white/40 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/50 fade-in-up overflow-hidden relative mb-12" style={{ animationDelay: '0.3s' }}>
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            
            {/* 슬라이드 0: 인턴십 소개 */}
            <div className="w-full flex-shrink-0 p-8 md:p-12">
              <div className="mb-14">
                <div className="border-l-4 border-[#8B0000] pl-5 mb-8">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                    {lang === 'ko' ? '인턴십 지원 계기 및 얻은 점' : 'インターンシップ応募のきっかけと得たこと'}
                  </h2>
                  <p className="text-[#8B0000] font-bold mt-3 text-lg">
                    {lang === 'ko' ? '글로벌 무대를 향한 도전' : 'グローバルな舞台への挑戦'}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <section className="bg-white/70 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-sm border border-white/80 hover:shadow-md transition-all">
                    <h3 className="font-bold text-2xl text-[#8B0000] mb-4 flex items-center">
                      <span className="text-2xl mr-3">💡</span>
                      {lang === 'ko' ? '지원 계기' : '応募のきっかけ'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {lang === 'ko' 
                        ? '대학교에서 소프트웨어를 전공하며 쌓은 지식이 실무에서도 도움이 될 수 있는지 확인해보고 싶었고, 앞으로 일본에서 취업하는 것을 목표로 하고 있었기 때문에 이번 일본 인턴십 프로그램에 지원하게 되었습니다.' 
                        : '大学でソフトウェアを専攻して得た知識が実務でも活かせるかどうかを確認したいと考えたことと、将来的に日本での就職を目指していたことから、今回の日本インターンシッププログラムに応募しました。'}
                    </p>
                  </section>

                  <section className="bg-white/70 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-sm border border-white/80 hover:shadow-md transition-all">
                    <h3 className="font-bold text-2xl text-[#8B0000] mb-4 flex items-center">
                      <span className="text-2xl mr-3">🌱</span>
                      {lang === 'ko' ? '얻은 점' : '得たこと'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {lang === 'ko' 
                        ? '현지 실무진들과 일본어로 소통하면서 회화 능력이 향상되었고, 비즈니스 일본어를 배울 수 있는 좋은 기회가 되었습니다. 또한 일본에서 현지인과 다름없는 생활을 하며 자연스럽게 적응할 수 있었습니다. 특히 학교에서 공부한 내용을 바탕으로 회사 업무를 보조하고, 막히는 부분을 스스로 고민하며 새로운 방법을 시도해 프로그램을 직접 개발해 보는 경험을 통해, 앞으로 현업에서도 잘 적응할 수 있을 것이라는 자신감을 얻었습니다.' 
                        : '現地の実務担当者の方々と日本語でコミュニケーションを取る中で会話力が向上し、ビジネス日本語を学ぶ良い機会となりました。また、日本で現地の方々と変わらない生活を送ることで、自然に現地の生活に適応することができました。特に、大学で学んだ内容を活かして会社の業務をサポートし、行き詰まった部分は自分で考え、新しい方法を試しながらプログラムを直接開発する経験を通じて、今後の実務でもしっかり適応できるという自信を得ることができました。'}
                    </p>
                  </section>
                </div>
              </div>

              <hr className="border-t-2 border-white/60 mb-14 mx-4" />
              
              <div className="border-l-4 border-[#8B0000] pl-5 mb-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                  {lang === 'ko' ? '일본 인턴십 기업 및 활동 소개' : '日本インターンシップ企業および活動紹介'}
                </h2>
                <p className="text-[#8B0000] font-bold mt-3 text-lg">
                  {lang === 'ko' ? '주식회사 alluxe' : '株式会社alluxe'}
                </p>
              </div>

              <div className="space-y-6">
                <section className="bg-white/70 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-sm border border-white/80 hover:shadow-md transition-all">
                  <h3 className="font-bold text-2xl text-[#8B0000] mb-4 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-[#8B0000] mr-3"></span>
                    {lang === 'ko' ? '회사 소개' : '会社紹介'}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {lang === 'ko' ? (
                      <>제가 근무한 주식회사 alluxe는 마케팅 업무를 전문으로 하는 기업입니다. 하라주쿠 지역의 10~20대 여성들이 관심을 가질 만한 매장과 이벤트 정보를 전달하는 <u><a href="https://sgs109.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">sgs109</a></u> 사이트를 운영하며, AI를 활용해 매장의 홍보를 지원하는 업무를 수행하고 있습니다.</>
                    ) : (
                      <>私が勤務した株式会社alluxeは、マーケティング業務を専門とする企業です。原宿エリアの10代〜20代女性が関心を持ちそうな店舗やイベント情報を発信する<u><a href="https://sgs109.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">sgs109</a></u>サイトを運営しており、AIを活用した店舗のプロモーション支援業務を行っています。</>
                    )}
                  </p>
                </section>

                <section className="bg-white/70 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-sm border border-white/80 hover:shadow-md transition-all">
                  <h3 className="font-bold text-2xl text-[#8B0000] mb-4 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-[#8B0000] mr-3"></span>
                    {lang === 'ko' ? '활동 소개' : '活動紹介'}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    {lang === 'ko' ? '저는 이 회사에서 마케팅에 활용할 하라주쿠 및 도쿄 23구의 매장 정보를 수집하는 프로그램을 개발하는 역할을 맡았습니다. 구글 비즈니스 프로필에서 홍보에 필요한 매장 정보를 자동으로 수집하는 프로그램과, 하라주쿠에 새로 개업한 매장들이 게시하는 홍보물 정보를 수집하는 프로그램을 개발했습니다.' : '私はこの会社で、マーケティングに活用する原宿および東京23区の店舗情報を収集するプログラムを開発する役割を担いました。Googleビジネスプロフィールから宣伝に必要な店舗情報を自動収集するプログラムと、原宿に新規開業した店舗が発信する宣伝情報を収集するプログラムを開発しました。'}
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {lang === 'ko' ? '근무하는 동안 일본인 담당자분들과 일본어로 회의를 진행하고 질의응답 및 피드백을 주고받으며 일본식 비즈니스 화법을 자연스럽게 익힐 수 있었습니다. 담당자분들이 친절하게 대해 주시고 일본 생활 전반에 많은 도움을 주신 덕분에 빠르게 적응할 수 있었습니다. 이번 인턴십을 통해 일본에서의 생활을 간접적으로 경험할 수 있었던 좋은 기회였다고 생각합니다.' : '勤務中は、日本人担当者の方々と日本語で会議を行い、質疑応答やフィードバックをいただく中で、日本のビジネスマナーや話し方を自然に身につけることができました。担当者の皆様が親切に接してくださり、日本での生活面でも多くのサポートをいただいたおかげで、早く適応することができました。今回のインターンシップを通じて、日本での生活を間接的に経験できたことは、とても良い機会だったと感じています。'}
                  </p>
                </section>

                <section className="bg-white/70 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-sm border border-white/80 hover:shadow-md transition-all">
                  <h3 className="font-bold text-2xl text-[#8B0000] mb-4 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-[#8B0000] mr-3"></span>
                    {lang === 'ko' ? '일본에서의 활동' : '日本での活動'}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {lang === 'ko' ? '평일에는 오전 10시부터 오후 7시까지 근무했고, 퇴근 후나 주말에는 일본의 다양한 관광지를 둘러보았습니다. 숙소가 센다가야역과 가까워 신주쿠, 시부야 등 도쿄 중심 지역에도 쉽게 접근할 수 있었고, 덕분에 여러 곳을 여행할 수 있었습니다.' : '平日は10時から19時まで勤務し、退勤後や週末には日本各地の観光スポットを巡りました。宿泊先が千駄ヶ谷駅から近く、新宿や渋谷など東京の中心エリアにもアクセスしやすかったため、様々な場所を訪れることができました。'}
                  </p>
                </section>
              </div>
            </div>

            {/* 슬라이드 1: 일정표 */}
            <div className="w-full flex-shrink-0 p-8 md:p-12">
              <div className="border-l-4 border-[#8B0000] pl-5 mb-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                  {lang === 'ko' ? '2026년 인턴십 일정표' : '2026年 インターンシップ日程表'}
                </h2>
                <p className="text-[#8B0000] font-bold mt-3 text-lg">
                  {lang === 'ko' ? '7월 ~ 8월 주요 활동 내역' : '7月〜8月 主な活動内容'}
                </p>
              </div>

              <div className="space-y-8">
                <section className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-white/80 overflow-hidden">
                  <h3 className="font-bold text-2xl text-gray-800 mb-4 ml-2">2026. 07</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse glass-table min-w-[600px]">
                      <thead>
                        <tr>
                          <th className="p-4 w-1/4 rounded-tl-xl">{lang === 'ko' ? '기간' : '期間'}</th>
                          <th className="p-4 w-3/4 rounded-tr-xl">{lang === 'ko' ? '주요 업무 및 활동 내용' : '主な業務および活動内容'}</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          <td className="p-4 font-medium whitespace-nowrap">{lang === 'ko' ? '7월 1주차 ~ 2주차' : '7月 第1週〜第2週'}</td>
                          <td className="p-4">
                            {lang === 'ko' ? '오리엔테이션 진행, sgs109 서비스 및 회사 시스템 이해, 업무용 개발 환경 세팅' : 'オリエンテーション実施、sgs109サービスおよび社内システムの理解、業務用の開発環境構築'}
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium whitespace-nowrap">{lang === 'ko' ? '7월 3주차 ~ 4주차' : '7月 第3週〜第4週'}</td>
                          <td className="p-4">
                            {lang === 'ko' ? '마케팅 활용 목적의 구글 비즈니스 프로필 매장 정보 자동 수집 프로그램 설계 및 개발 시작' : 'マーケティング活用を目的としたGoogleビジネスプロフィール店舗情報の自動収集プログラムの設計および開発開始'}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-white/80 overflow-hidden">
                  <h3 className="font-bold text-2xl text-gray-800 mb-4 ml-2">2026. 08</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse glass-table min-w-[600px]">
                      <thead>
                        <tr>
                          <th className="p-4 w-1/4 rounded-tl-xl">{lang === 'ko' ? '기간' : '期間'}</th>
                          <th className="p-4 w-3/4 rounded-tr-xl">{lang === 'ko' ? '주요 업무 및 활동 내용' : '主な業務および活動内容'}</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          <td className="p-4 font-medium whitespace-nowrap">{lang === 'ko' ? '8월 1주차 ~ 2주차' : '8月 第1週〜第2週'}</td>
                          <td className="p-4">
                            {lang === 'ko' ? '도쿄 23구 및 하라주쿠 신규 개업 매장의 홍보물 정보를 수집하는 추가 프로그램 개발' : '東京23区および原宿の新規開業店舗のプロモーション情報を収集する追加プログラムの開発'}
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium whitespace-nowrap">{lang === 'ko' ? '8월 3주차 ~ 4주차' : '8月 第3週〜第4週'}</td>
                          <td className="p-4">
                            {lang === 'ko' ? '개발 프로그램 테스트 및 디버깅, 현지 담당자 일본어 회의 및 피드백 반영, 최종 결과물 보고 및 인턴십 마무리' : '開発プログラムのテストとデバッグ、現地担当者との日本語会議およびフィードバックの反映、最終成果物の報告およびインターンシップ終了'}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
            </div>
            
          </div>
        </main>

        {/* 인턴십 활동 사진 섹션 */}
        <div className={`w-full bg-white/40 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/50 p-8 md:p-12 fade-in-up overflow-hidden relative`} style={{ animationDelay: '0.4s' }}>
          
          <div className="border-l-4 border-[#8B0000] pl-5 mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              {lang === 'ko' ? '인턴십 활동 사진' : 'インターンシップ活動写真'}
            </h2>
            <p className="text-[#8B0000] font-bold mt-3 text-lg">
              {lang === 'ko' ? '업무 성과 및 현지 문화 체험' : '業務成果および現地文化体験'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-5 shadow-sm border border-white/80 hover:shadow-md transition-all group overflow-hidden">
              <img 
                src={typeof img03 === 'string' ? img03 : (img03 as any).src || img03} 
                alt={lang === 'ko' ? '인턴십 업무 결과 사진' : 'インターンシップ業務成果の写真'}
                className="rounded-2xl w-full h-64 object-cover mb-4 group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {lang === 'ko' ? '인턴십 업무 결과' : 'インターンシップ業務成果'}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {lang === 'ko' 
                  ? '인턴십 기간 동안 기획하고 개발한 하라주쿠 매장 정보 수집 프로그램의 결과물입니다. 실무에 적용되는 과정을 직접 경험할 수 있었습니다.' 
                  : 'インターンシップ期間中に企画・開発した原宿の店舗情報収集プログラムの成果物です。実務に適用される過程を直接経験することができました。'}
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-5 shadow-sm border border-white/80 hover:shadow-md transition-all group overflow-hidden">
              <img 
                src={typeof img02 === 'string' ? img02 : (img02 as any).src || img02} 
                alt={lang === 'ko' ? '일본 관광 및 문화 체험 사진' : '日本の観光および文化体験の写真'}
                className="rounded-2xl w-full h-64 object-cover mb-4 group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {lang === 'ko' ? '일본 관광 및 문화 체험' : '日本の観光および文化体験'}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {lang === 'ko' 
                  ? '퇴근 후와 주말을 활용해 도쿄의 다양한 명소들을 방문하며 일본 문화를 깊이 있게 체험했던 소중한 시간입니다.' 
                  : '退勤後や週末を活用して東京の様々な名所を訪れ、日本文化を深く体験した貴重な時間です。'}
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}