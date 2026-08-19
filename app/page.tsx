'use client';

import React, { useEffect, useRef, useState } from 'react';

type Lang = 'ko' | 'ja';
const tx = (ko: string, ja: string, lang: Lang) => (lang === 'ko' ? ko : ja);

const SECTIONS = [
  { id: 'cover', num: '00', ko: '표지', ja: '表紙', kanji: '表紙' },
  { id: 'profile', num: '01', ko: '기본 프로필', ja: '基本プロフィール', kanji: '基本情報' },
  { id: 'work', num: '02', ko: '기업 업무 내용', ja: '企業での業務内容', kanji: '業務内容' },
  { id: 'life', num: '03', ko: '일본 생활 기록', ja: '日本での生活記録', kanji: '生活記録' },
  { id: 'reflection', num: '04', ko: '회고 및 성과', ja: '振り返りと成果', kanji: '振り返り' },
  { id: 'thanks', num: '05', ko: '감사 인사', ja: '謝辞', kanji: '謝辞' },
] as const;

export default function JisaInternshipReport() {
  // 1. 기본 언어를 일본어로 변경
  const [lang, setLang] = useState<Lang>('ja');
  const [active, setActive] = useState('cover');
  const refs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );
    SECTIONS.forEach((s) => {
      const el = refs.current[s.id];
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    refs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className={`min-h-[100dvh] relative overflow-hidden bg-animated ${lang === 'ko' ? 'font-body-ko' : 'font-body-ja'}`}
      style={{ color: 'var(--ink)' }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        :root {
          /* 색상 대비 및 화려함을 위해 변수 조정 */
          --paper: #ECE8DD;
          --paper-line: rgba(207, 199, 176, 0.6);
          --ink: #111827;
          --ink-soft: #4B5563;
          --ink-faint: #9CA3AF;
          --seal: #E11D48;
          --seal-soft: rgba(225, 29, 72, 0.08);
          --accent-glow: rgba(225, 29, 72, 0.15);
        }
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@500;700;900&family=Noto+Serif+JP:wght@500;700;900&family=Noto+Sans+KR:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;700&family=JetBrains+Mono:wght@400;500;700&display=swap');

        .font-display-ko { font-family: 'Noto Serif KR', serif; }
        .font-display-ja { font-family: 'Noto Serif JP', serif; }
        .font-body-ko { font-family: 'Noto Sans KR', sans-serif; }
        .font-body-ja { font-family: 'Noto Sans JP', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }

        /* 배경 애니메이션 (움직이는 그라데이션) */
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .bg-animated {
          background: linear-gradient(-45deg, #f3e8e0, #e9f5f9, #fde2e4, #e2e2f3);
          background-size: 400% 400%;
          animation: gradientBG 15s ease infinite;
        }

        /* 텍스트 그라데이션 효과 */
        .text-gradient {
          background: linear-gradient(135deg, #111827 0%, #4f46e5 50%, #e11d48 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* 시트 애니메이션 및 입체감 강화 */
        .sheet {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 20px 40px -20px rgba(0,0,0,0.1);
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .sheet:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 30px 60px -20px var(--accent-glow);
        }
        .sheet::before {
          content: '';
          position: absolute;
          top: -1px; left: 24px; right: 24px;
          height: 0;
          border-top: 2px dashed var(--paper-line);
        }

        /* 도장 찍히는 팝업 애니메이션 */
        @keyframes stampIn {
          0% { opacity: 0; transform: scale(2.5) rotate(20deg); }
          50% { opacity: 1; transform: scale(0.9) rotate(-12deg); }
          100% { opacity: 1; transform: scale(1) rotate(-9deg); }
        }
        .stamp {
          border: 4px solid var(--seal);
          color: var(--seal);
          border-radius: 9999px;
          box-shadow: 0 0 15px var(--accent-glow), inset 0 0 10px var(--accent-glow);
          opacity: 0;
          animation: stampIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          animation-delay: 0.5s;
        }

        .index-rail button {
          transition: all 0.2s ease;
        }
        .index-active { 
          color: var(--seal) !important; 
          border-color: var(--seal) !important; 
          background: var(--seal-soft) !important; 
          transform: translateX(4px);
        }
        .field-label {
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: .06em;
          font-size: 0.75rem;
          color: var(--ink-faint);
          text-transform: uppercase;
        }
      `,
        }}
      />

      {/* 언어 토글 */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
        <div
          className="inline-flex rounded-full p-1 shadow-lg border"
          style={{ background: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(10px)' }}
        >
          {(['ko', 'ja'] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className="px-4 py-2 rounded-full text-sm font-bold font-mono transition-all duration-300"
              style={
                lang === l
                  ? { background: 'var(--ink)', color: '#fff', boxShadow: '0 4px 10px rgba(0,0,0,0.15)' }
                  : { color: 'var(--ink-soft)' }
              }
            >
              {l === 'ko' ? 'KOR' : '日本語'}
            </button>
          ))}
        </div>
      </div>

      {/* 모바일 인덱스 탭 */}
      <div
        className="lg:hidden sticky top-0 z-40 overflow-x-auto whitespace-nowrap px-4 py-3 border-b shadow-sm"
        style={{ background: 'rgba(255,255,255,0.8)', borderColor: 'var(--paper-line)', backdropFilter: 'blur(12px)' }}
      >
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`inline-flex items-center gap-1.5 mr-2 px-3 py-1.5 rounded-full border text-xs font-mono font-bold ${
              active === s.id ? 'index-active' : ''
            }`}
            style={{ borderColor: 'var(--paper-line)', color: 'var(--ink-soft)' }}
          >
            <span>{s.num}</span>
            <span className="opacity-80">{tx(s.ko, s.ja, lang)}</span>
          </button>
        ))}
      </div>

      <div className="relative z-10 flex max-w-7xl mx-auto">
        {/* 좌측 인덱스 레일 (데스크톱) */}
        <aside className="hidden lg:block sticky top-0 h-[100dvh] w-64 shrink-0 py-14 px-6">
          <div className="mb-10">
            <p className="field-label mb-1">JISA · DOC-2026</p>
            <h2 className="font-display-ko text-lg font-bold leading-tight tracking-tight text-gradient">
              {tx('인턴십 체험 기록', 'インターンシップ体験記録', lang)}
            </h2>
          </div>
          <nav className="index-rail flex flex-col gap-1.5">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`text-left px-3 py-2.5 rounded-md border border-transparent flex items-baseline gap-3 ${
                  active === s.id ? 'index-active font-bold shadow-sm' : ''
                }`}
                style={{ color: 'var(--ink-soft)' }}
              >
                <span className="font-mono text-xs" style={{ color: active === s.id ? 'var(--seal)' : 'var(--ink-faint)' }}>{s.num}</span>
                <span className="text-sm">{tx(s.ko, s.ja, lang)}</span>
              </button>
            ))}
          </nav>
          <div className="mt-12 pt-6 border-t" style={{ borderColor: 'var(--paper-line)' }}>
            <p className="field-label leading-relaxed">
              {tx('일본 인턴십 지원협회', '日本インターンシップ支援協会', lang)}<br/>
              {tx('주최: 대학 SW 중심사업단', '主催：大学SW中心事業団', lang)}
            </p>
          </div>
        </aside>

        {/* 메인 콘텐츠 */}
        <main className="flex-1 px-4 md:px-10 py-10 md:py-16 max-w-3xl">

          {/* 00. 표지 */}
          <section
            id="cover"
            ref={(el) => { refs.current['cover'] = el; }}
            className="mb-20"
          >
            <p className="field-label mb-4 tracking-widest text-indigo-500 font-bold">JAPAN INTERNSHIP SUPPORT ASSOCIATION</p>
            <h1 className={`${lang === 'ko' ? 'font-display-ko' : 'font-display-ja'} text-5xl md:text-7xl font-black leading-[1.1] mb-4 text-gradient`}>
              {tx('인턴십 활동 기록', 'インターンシップ活動記録', lang)}
              <br />
              <span className="text-3xl md:text-5xl" style={{ color: 'var(--seal)', WebkitTextFillColor: 'initial', WebkitBackgroundClip: 'initial', background: 'none' }}>
                {tx('· 체험 보고서', '・体験報告書', lang)}
              </span>
            </h1>
            <p className="text-base md:text-lg mt-6 font-medium" style={{ color: 'var(--ink-soft)' }}>
              {tx(
                'JISA (Japan Internship Support Association) · 일본 인턴십 지원협회 · 주최: 대학 SW 중심사업단',
                'JISA（Japan Internship Support Association）・日本インターンシップ支援協会・主催：大学SW中心事業団',
                lang
              )}
            </p>

            <div className="mt-12 sheet rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
              
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 shadow-xl flex-shrink-0 relative z-10" style={{ borderColor: '#fff' }}>
                <img src="/image/img01.jpeg" alt={tx('작성자 프로필', '作成者プロフィール', lang)} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 text-center md:text-left relative z-10">
                <p className="field-label mb-1">{tx('작성자', '作成者', lang)}</p>
                <h3 className="font-display-ko text-3xl font-bold mb-3">{tx('정우진', 'チョン・ウジン', lang)}</h3>
                <div className="text-sm md:text-base space-y-1.5 font-medium" style={{ color: 'var(--ink-soft)' }}>
                  <p>{tx('전남대학교 · 소프트웨어공학과', '全南大学・ソフトウェア工学科', lang)}</p>
                  <p>{tx('인턴십 기업: 株式会社ALLUXE (도쿄)', 'インターンシップ企業：株式会社ALLUXE（東京）', lang)}</p>
                </div>
              </div>
              <div className="stamp w-24 h-24 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 bg-white bg-opacity-50 backdrop-blur-sm">
                <span className="font-display-ko text-base font-black text-center leading-tight">
                  {tx('제출\n완료', '提出\n済み', lang).split('\n').map((line, i) => (
                    <React.Fragment key={i}>{line}<br/></React.Fragment>
                  ))}
                </span>
              </div>
            </div>
          </section>

          {/* 01. 기본 프로필 */}
          <Sheet id="profile" num="01" refs={refs} kanji="基本情報" title={tx('기본 프로필', '基本プロフィール', lang)}>
            <FieldRow label={tx('대학명 · 학부 · 학과', '大学名・学部・学科', lang)} value={tx('전남대학교 · 공과대학 · 소프트웨어공학과', '全南大学・工科大学・ソフトウェア工学科', lang)} />
            <FieldRow label={tx('학년', '学年', lang)} value={tx('3학년 (22학번)', '3年生（22年度入学）', lang)} />
            <FieldRow
              label={tx('전공 및 보유 IT 기술', '専攻および保有IT技術', lang)}
              value={tx(
                'Python 데이터 수집/자동화, React 웹 개발, Firebase/MySQL/Docker 기반 DB 설계, Apify·Make·Gemini 연동 데이터 파이프라인 구축',
                'Pythonによるデータ収集・自動化、Reactを用いたWeb開発、Firebase/MySQL/DockerベースのDB設計、Apify・Make・Gemini連携のデータパイプライン構築',
                lang
              )}
            />
            <FieldRow label={tx('일본어 능력', '日本語能力', lang)} value={tx('일상회화 및 비즈니스 회화 가능 수준', '日常会話およびビジネス会話が可能なレベル', lang)} />
            <FieldRow label={tx('인턴십 참가 기간', 'インターンシップ参加期間', lang)} value={tx('2026년 6월 30일 ~ 8월 29일 (여름 8주간)', '2026年6月30日〜8月29日（夏季8週間）', lang)} />
            <FieldRow label={tx('주최', '主催', lang)} value={tx('SW 중심사업단', 'SW中心事業団', lang)} last />
          </Sheet>

          {/* 02. 업무 내용 */}
          <Sheet id="work" num="02" refs={refs} kanji="業務内容" title={tx('인턴십 기업에서의 업무 내용', 'インターンシップ企業での業務内容', lang)}>
            <p className="text-sm mb-6 px-4 py-3 rounded-lg font-medium shadow-sm border border-red-100" style={{ background: 'var(--seal-soft)', color: 'var(--seal)' }}>
              {tx('※ 기업의 기밀 정보나 사진 사용은 사전에 기업 확인이 필요합니다.', '※ 企業の機密情報や写真の使用は事前に企業の確認が必要です。', lang)}
            </p>
            <FieldRow
              label={tx('배치 부서 및 담당 업무 개요', '配属部署および担当業務概要', lang)}
              value={tx(
                '데이터 수집 및 정리, 엑셀 작성, SNS 정보 수집 자동화 시스템 구축, 사내 활용 및 서비스 연동을 위한 웹 개발 담당.',
                'データ収集及び整理、Excel作成、SNS情報収集の自動化システム構築、社内活用およびサービス連携のためのWeb開発を担当。',
                lang
              )}
            />
            <FieldRow
              label={tx('구체적인 작업 · 개발 내용', '具体的な作業・開発内容', lang)}
              value={
                <ul className="list-disc pl-5 space-y-2">
                  <li>{tx('Google Maps API와 Python을 활용한 도쿄 퍼스널짐 매장 정보 대량 수집 및 엑셀 자동화', 'Google Maps APIとPythonを活用した東京のパーソナルジム店舗情報の大量収集およびExcel自動化', lang)}</li>
                  <li>{tx('정보 사이트 sgs109 스냅 뷰어 기획 및 테스트 풀스택(React, MySQL, Docker 등) 개발', '情報サイト「sgs109」のスナップビューアの企画およびテスト用フルスタック（React, MySQL, Docker等）開発', lang)}</li>
                  <li>{tx('Apify와 Make를 활용한 하라주쿠 매장 SNS 자동 수집 시스템 구축 및 이메일/시트 연동', 'ApifyとMakeを活用した原宿店舗SNSの自動収集システムの構築とメール・スプレッドシート連携', lang)}</li>
                  <li>{tx('크레딧 최적화를 위해 Gemini API를 연동하여 AI 데이터 가공 파이프라인(45크레딧->6크레딧 단축) 설계', 'クレジット最適化のためGemini APIを連携し、AIデータ加工パイプライン（45クレジット→6クレジットに削減）を設計', lang)}</li>
                  <li>{tx('React와 Firebase를 활용한 GPS 기반 사용자 여행 기록 웹앱 기획 및 주요 기능 구현', 'ReactとFirebaseを活用したGPSベースのユーザー旅行記録Webアプリの企画および主要機能の実装', lang)}</li>
                </ul>
              }
            />
            <FieldRow
              label={tx('당시 필요했던 IT 기술', '当時必要とされたIT技術', lang)}
              value={tx('Google Maps API, Google Places API, MySQL, Docker, Dbeaver, React, Firebase, Apify, Make, Gemini, Python', 'Google Maps API、Google Places API、MySQL、Docker、Dbeaver、React、Firebase、Apify、Make、Gemini、Python', lang)}
            />
            <FieldRow
              label={tx('제작물 소개 (성과물)', '制作物紹介（成果物）', lang)}
              value={<a href="https://epic-bon.web.app" target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-800 underline font-medium transition-colors">https://epic-bon.web.app (여행 기록 웹앱)</a>}
              last
            />
            <div className="mt-6 rounded-2xl overflow-hidden border shadow-inner" style={{ borderColor: 'var(--paper-line)' }}>
              <img src="/image/img03.png" alt={tx('업무 결과물 스크린샷', '業務成果物のスクリーンショット', lang)} className="w-full h-64 object-cover bg-gray-100 hover:scale-105 transition-transform duration-500" />
              <div className="bg-white px-4 py-3 border-t" style={{ borderColor: 'var(--paper-line)' }}>
                <p className="text-xs font-bold" style={{ color: 'var(--ink-faint)' }}>
                  {tx('업무 결과물 / 시스템 화면 스크린샷', '業務成果物 / システム画面のスクリーンショット', lang)}
                </p>
              </div>
            </div>
          </Sheet>

          {/* 03. 일본 생활 */}
          <Sheet id="life" num="03" refs={refs} kanji="生活記録" title={tx('일본에서의 생활 내용 · 체류 기록', '日本での生活内容・滞在記録', lang)}>
            <FieldRow
              label={tx('방문한 장소', '訪れた場所', lang)}
              value={tx(
                '숙소(다이타바시, 키타산도) 주변 및 신주쿠, 시모키타자와, 고엔지, 치요다구, 오다이바, 이케부쿠로, 시부야, 하라주쿠, 아키하바라, 우에노, 아사쿠사, 긴자 등 도쿄 주요 관광지',
                '宿泊先（代田橋、北参道）周辺および新宿、下北沢、高円寺、千代田区、お台場、池袋、渋谷、原宿、秋葉原、上野、浅草、銀座など東京の主要観光地',
                lang
              )}
            />
            <FieldRow
              label={tx('음식 · 식문화 체험', '食事・食文化体験', lang)}
              value={tx(
                '평일 퇴근 후에는 인근 마트에서 할인하는 도시락이나 라면으로 간편하게 식사를 해결했으며, 주말에는 아메요코초 등 재래시장을 방문해 탕후루나 일본 현지 길거리 음식들을 다양하게 체험했습니다.',
                '平日の退勤後は近所のスーパーで割引された弁当やラーメンで手軽に食事を済ませ、週末はアメ横などの在来市場を訪れ、タンフルや日本現地の様々な屋台料理を体験しました。',
                lang
              )}
            />
            <FieldRow
              label={tx('사전 준비', '事前準備', lang)}
              value={tx(
                '여름철 무더운 날씨에 대비한 얇은 옷가지와 현지 교통 및 식비로 사용할 여유 자금을 준비하여 생활에 큰 무리가 없도록 하였습니다.',
                '夏の猛暑に備えた薄手のアパレルや、現地の交通費・食費として余裕のある資金を準備したため、生活に大きな支障はありませんでした。',
                lang
              )}
            />
            <div className="mt-6 rounded-2xl overflow-hidden border shadow-inner" style={{ borderColor: 'var(--paper-line)' }}>
              <img src="/image/img02.jpeg" alt={tx('일본 생활 및 관광 사진', '日本での生活および観光の写真', lang)} className="w-full h-64 object-cover bg-gray-100 hover:scale-105 transition-transform duration-500" />
              <div className="bg-white px-4 py-3 border-t" style={{ borderColor: 'var(--paper-line)' }}>
                <p className="text-xs font-bold" style={{ color: 'var(--ink-faint)' }}>
                  {tx('주말을 활용한 도쿄 답사 (아메요코초, 신주쿠 교엔 등)', '週末を活用した東京散策（アメ横、新宿御苑など）', lang)}
                </p>
              </div>
            </div>
          </Sheet>

          {/* 04. 회고 및 성과 */}
          <Sheet id="reflection" num="04" refs={refs} kanji="振り返り" title={tx('체험에 대한 회고 및 성과', '体験についての振り返りと成果', lang)}>
            <FieldRow
              label={tx('참가하며 느낀 점 및 성과', '参加して感じたことと成果', lang)}
              value={tx(
                '처음 접하는 업무가 많아 막막하기도 했으나, AI를 적극적으로 활용하며 능동적으로 문제 해결 방법을 찾았습니다. 결과적으로 API를 활용한 실용적 자동화 도구 개발과 프론트엔드, 백엔드, DB를 아우르는 풀스택 개발 경험을 통해 조직의 일원으로서 크게 성장할 수 있었습니다.',
                '初めて経験する業務が多く戸惑うこともありましたが、AIを積極的に活用し能動的に問題解決の方法を見つけました。結果的にAPIを活用した実用的な自動化ツールの開発や、フロントエンド、バックエンド、DBを網羅するフルスタック開発の経験を通じて、組織の一員として大きく成長することができました。',
                lang
              )}
            />
            <FieldRow
              label={tx('좋았던 점', '良かった点', lang)}
              value={tx(
                '회사에서 기획서를 직접 작성하고 담당자와 피드백을 주고받으며 실무 프로세스를 배운 점이 가장 좋았습니다. 기술력 향상은 물론, 비즈니스 매너와 소통 능력을 기를 수 있었습니다.',
                '会社で企画書を自ら作成し、担当者とフィードバックをやり取りしながら実務プロセスを学べた点が最も良かったです。技術力の向上はもちろん、ビジネスマナーやコミュニケーション能力を養うことができました。',
                lang
              )}
            />
            <FieldRow
              label={tx('일본어의 필요성 및 조언', '日本語の必要性およびアドバイス', lang)}
              value={tx(
                '일본 현지 근무자들과 논의하고 피드백을 요구하는 과정에서 일본어 소통 능력의 중요성을 절감했습니다. 특히 단어를 알아도 발음이 부정확하면 원활한 소통이 어려웠기에, 향후 참가할 학생들은 일본어 공부 시 반드시 회화와 발음 연습을 병행할 것을 권장합니다.',
                '日本現地のスタッフと議論しフィードバックを求める過程で、日本語でのコミュニケーション能力の重要性を痛感しました。特に単語を知っていても発音が不正確だと円滑な疎通が難しかったため、今後参加する学生は日本語を勉強する際、必ず会話と発音練習を並行することをお勧めします。',
                lang
              )}
              last
            />
          </Sheet>

          {/* 05. 감사 인사 */}
          <Sheet id="thanks" num="05" refs={refs} kanji="謝辞" title={tx('기업에 대한 감사 인사', '企業に対する謝辞', lang)}>
            <p className="text-base leading-loose font-medium bg-indigo-50 p-6 rounded-xl border border-indigo-100" style={{ color: 'var(--ink)' }}>
              {tx(
                '인턴십 기간 동안 부족한 점이 많았음에도 불구하고 세심하게 지도해 주시고 아낌없는 피드백을 주신 주식회사 ALLUXE의 담당자님과 모든 임직원 여러분께 진심으로 깊은 감사의 말씀을 드립니다. 실무 경험뿐만 아니라 따뜻한 배려 덕분에 일본에서의 생활과 업무 모두 성공적으로 마칠 수 있었습니다.',
                'インターンシップ期間中、至らない点も多々ありましたが、細やかにご指導いただき、惜しみないフィードバックを下さった株式会社ALLUXEの担当者様および社員の皆様に心より深く感謝申し上げます。実務経験のみならず、皆様の温かいご配慮のおかげで、日本での生活と業務のすべてを無事に終えることができました。',
                lang
              )}
            </p>
          </Sheet>

          <footer className="mt-20 pt-8 border-t text-sm text-center font-medium" style={{ borderColor: 'var(--paper-line)', color: 'var(--ink-faint)' }}>
            {tx('JISA · Japan Internship Support Association · 일본 인턴십 지원협회', 'JISA・Japan Internship Support Association・日本インターンシップ支援協会', lang)}
          </footer>
        </main>
      </div>
    </div>
  );
}

function Sheet({
  id,
  num,
  kanji,
  title,
  refs,
  children,
}: {
  id: string;
  num: string;
  kanji: string;
  title: React.ReactNode;
  refs: React.MutableRefObject<Record<string, HTMLElement | null>>;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      ref={(el) => { refs.current[id] = el; }}
      className="sheet rounded-3xl p-8 md:p-12 mb-10 scroll-mt-12"
    >
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-sm px-3 py-1 rounded-md font-bold text-white bg-gradient-to-r from-rose-500 to-rose-600 shadow-sm">
          {num}
        </span>
        <span className="font-mono text-sm tracking-widest font-semibold" style={{ color: 'var(--ink-faint)' }}>{kanji}</span>
      </div>
      <h2 className="font-display-ko text-3xl md:text-4xl font-bold mb-8 tracking-tight" style={{ color: 'var(--ink)' }}>
        {title}
      </h2>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

function FieldRow({
  label,
  value,
  last,
}: {
  label: React.ReactNode;
  value: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-[240px_1fr] gap-3 md:gap-8 ${last ? '' : 'pb-6 border-b'}`} style={{ borderColor: 'var(--paper-line)' }}>
      <p className="field-label pt-1.5">{label}</p>
      <div className="text-base leading-relaxed" style={{ color: 'var(--ink)' }}>{value}</div>
    </div>
  );
}
