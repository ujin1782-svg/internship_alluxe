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
  { id: 'notice', num: '06', ko: '작성 안내', ja: '作成にあたって', kanji: '注意事項' },
] as const;

export default function JisaInternshipReport() {
  const [lang, setLang] = useState<Lang>('ko');
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
      className={`min-h-[100dvh] relative ${lang === 'ko' ? 'font-body-ko' : 'font-body-ja'}`}
      style={{ background: 'var(--paper)', color: 'var(--ink)' }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        :root {
          --paper: #ECE8DD;
          --paper-deep: #E2DDCE;
          --paper-line: #CFC7B0;
          --ink: #22283A;
          --ink-soft: #545C6E;
          --ink-faint: #8A8F9D;
          --seal: #B3272C;
          --seal-soft: rgba(179,39,44,0.08);
          --teal: #3E5C56;
          --teal-soft: rgba(62,92,86,0.10);
        }
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@500;700;900&family=Noto+Serif+JP:wght@500;700;900&family=Noto+Sans+KR:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;700&family=JetBrains+Mono:wght@400;500;700&display=swap');

        .font-display-ko { font-family: 'Noto Serif KR', serif; }
        .font-display-ja { font-family: 'Noto Serif JP', serif; }
        .font-body-ko { font-family: 'Noto Sans KR', sans-serif; }
        .font-body-ja { font-family: 'Noto Sans JP', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }

        .paper-texture {
          background-image:
            repeating-linear-gradient(115deg, rgba(34,40,58,0.015) 0px, rgba(34,40,58,0.015) 1px, transparent 1px, transparent 3px);
        }

        .sheet {
          background: #F5F2E9;
          border: 1px solid var(--paper-line);
          box-shadow: 0 1px 0 rgba(34,40,58,0.03), 0 12px 28px -18px rgba(34,40,58,0.35);
          position: relative;
        }
        .sheet::before {
          content: '';
          position: absolute;
          top: -1px; left: 24px; right: 24px;
          height: 0;
          border-top: 2px dashed var(--paper-line);
        }
        .stamp {
          border: 3px solid var(--seal);
          color: var(--seal);
          border-radius: 9999px;
          transform: rotate(-9deg);
          box-shadow: 0 0 0 2px rgba(179,39,44,0.06);
        }
        .index-rail button {
          transition: color .2s ease, border-color .2s ease, background-color .2s ease;
        }
        .index-active { color: var(--seal) !important; border-color: var(--seal) !important; background: var(--seal-soft) !important; }
        .field-label {
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: .06em;
          font-size: 0.7rem;
          color: var(--ink-faint);
        }
        .blank {
          border-bottom: 1px dashed var(--paper-line);
          color: var(--ink-faint);
        }
      `,
        }}
      />

      {/* 언어 토글 */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-40">
        <div
          className="inline-flex rounded-full p-1 shadow-md border"
          style={{ background: 'rgba(245,242,233,0.9)', borderColor: 'var(--paper-line)', backdropFilter: 'blur(6px)' }}
        >
          {(['ko', 'ja'] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className="px-4 py-2 rounded-full text-sm font-bold font-mono transition-all"
              style={
                lang === l
                  ? { background: 'var(--ink)', color: 'var(--paper)' }
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
        className="lg:hidden sticky top-0 z-30 overflow-x-auto whitespace-nowrap px-4 py-3 border-b"
        style={{ background: 'rgba(236,232,221,0.92)', borderColor: 'var(--paper-line)', backdropFilter: 'blur(6px)' }}
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
            <span className="opacity-70">{tx(s.ko, s.ja, lang)}</span>
          </button>
        ))}
      </div>

      <div className="relative z-10 flex max-w-7xl mx-auto">
        {/* 좌측 인덱스 레일 (데스크톱) */}
        <aside className="hidden lg:block sticky top-0 h-[100dvh] w-64 shrink-0 py-14 px-6">
          <div className="mb-10">
            <p className="field-label mb-1">JISA · DOC-2026</p>
            <h2 className="font-display-ko text-lg font-bold leading-tight" style={{ color: 'var(--ink)' }}>
              {tx('인턴십 체험 기록', 'インターンシップ体験記録', lang)}
            </h2>
          </div>
          <nav className="index-rail flex flex-col gap-1">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`text-left px-3 py-2.5 rounded-md border border-transparent flex items-baseline gap-3 ${
                  active === s.id ? 'index-active' : ''
                }`}
                style={{ color: 'var(--ink-soft)' }}
              >
                <span className="font-mono text-xs" style={{ color: 'var(--ink-faint)' }}>{s.num}</span>
                <span className="text-sm font-bold">{tx(s.ko, s.ja, lang)}</span>
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
            className="mb-16"
          >
            <p className="field-label mb-4">JAPAN INTERNSHIP SUPPORT ASSOCIATION</p>
            <h1 className={lang === 'ko' ? 'font-display-ko text-4xl md:text-6xl font-black leading-[1.05] mb-3' : 'font-display-ja text-4xl md:text-6xl font-black leading-[1.05] mb-3'} style={{ color: 'var(--ink)' }}>
              {tx('인턴십 활동 기록', 'インターンシップ活動記録', lang)}
              <br />
              <span style={{ color: 'var(--seal)' }}>{tx('· 체험 보고서', '・体験報告書', lang)}</span>
            </h1>
            <p className="text-base md:text-lg mt-4" style={{ color: 'var(--ink-soft)' }}>
              {tx(
                'JISA (Japan Internship Support Association) · 일본 인턴십 지원협회 · 주최: 대학 SW 중심사업단',
                'JISA（Japan Internship Support Association）・日本インターンシップ支援協会・主催：大学SW中心事業団',
                lang
              )}
            </p>

            <div className="mt-10 sheet rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 flex-shrink-0" style={{ borderColor: 'var(--paper)' }}>
                <img src="/image/img01.jpeg" alt={tx('작성자 프로필', '作成者プロフィール', lang)} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="field-label mb-1">{tx('작성자', '作成者', lang)}</p>
                <h3 className="font-display-ko text-2xl font-bold mb-3">{tx('정우진', 'チョン・ウジン', lang)}</h3>
                <div className="text-sm space-y-1" style={{ color: 'var(--ink-soft)' }}>
                  <p>{tx('전남대학교 · 소프트웨어공학과', '全南大学・ソフトウェア工学科', lang)}</p>
                  <p>{tx('인턴십 기업: 株式会社alluxe (도쿄)', 'インターンシップ企業：株式会社alluxe（東京）', lang)}</p>
                </div>
              </div>
              <div className="stamp w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-display-ko text-sm font-black text-center leading-tight">
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
            <FieldRow label={tx('학년', '学年', lang)} value={tx('4학년 (2022학번)', '4年生（2022年度入学）', lang)} />
            <FieldRow
              label={tx('전공 및 보유 IT 기술', '専攻および保有IT技術', lang)}
              value={tx(
                'Python 데이터 수집/자동화, React·Next.js 웹 개발, Firebase/MySQL 기반 DB 설계, Make.com·Apify 연동 자동화 파이프라인 구축, REST API 설계(PHP)',
                'Pythonによるデータ収集・自動化、React・Next.jsを用いたWeb開発、Firebase/MySQLベースのDB設計、Make.com・Apify連携の自動化パイプライン構築、REST API設計（PHP）',
                lang
              )}
            />
            <FieldRow label={tx('일본어 능력', '日本語能力', lang)} value={<span className="blank pb-0.5">{tx('JLPT [ 급 ] 또는 일상·비즈니스 회화 가능 수준', 'JLPT [ 級 ] または日常・ビジネス会話が可能なレベル', lang)}</span>} />
            <FieldRow label={tx('인턴십 참가 기간', 'インターンシップ参加期間', lang)} value={tx('2026년 6월 30일 ~ 8월 29일 (여름 8주간)', '2026年6月30日〜8月29日（夏季8週間）', lang)} />
            <FieldRow label={tx('주최', '主催', lang)} value={tx('SW 중심사업단', 'SW中心事業団', lang)} last />
          </Sheet>

          {/* 02. 업무 내용 */}
          <Sheet id="work" num="02" refs={refs} kanji="業務内容" title={tx('인턴십 기업에서의 업무 내용', 'インターンシップ企業での業務内容', lang)}>
            <p className="text-xs mb-6 px-3 py-2 rounded-md" style={{ background: 'var(--seal-soft)', color: 'var(--seal)' }}>
              {tx('※ 기업의 기밀 정보나 사진 사용은 사전에 기업 확인이 필요합니다.', '※ 企業の機密情報や写真の使用は事前に企業の確認が必要です。', lang)}
            </p>
            <FieldRow
              label={tx('배치 부서 및 담당 업무 개요', '配属部署および担当業務概要', lang)}
              value={tx(
                '마케팅팀 배속. 하라주쿠·도쿄 23구 지역 매장 정보를 수집·가공하여, 10~20대 여성 대상 정보 사이트 sgs109 운영을 지원하는 자동화 도구 개발 담당.',
                'マーケティングチーム配属。原宿・東京23区エリアの店舗情報を収集・加工し、10〜20代女性向け情報サイト「sgs109」の運営を支援する自動化ツールの開発を担当。',
                lang
              )}
            />
            <FieldRow
              label={tx('구체적인 작업 · 개발 내용', '具体的な作業・開発内容', lang)}
              value={
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>{tx('Google 비즈니스 프로필에서 매장 홍보 정보를 자동 수집하는 프로그램 개발', 'Googleビジネスプロフィールから店舗のプロモーション情報を自動収集するプログラムの開発', lang)}</li>
                  <li>{tx('하라주쿠 신규 개업 매장의 Instagram · X 게시물을 Apify로 수집하고 Gemini AI로 가공하는 파이프라인 구축', '原宿の新規開業店舗のInstagram・X投稿をApifyで収集し、Gemini AIで加工するパイプラインの構築', lang)}</li>
                  <li>{tx('가공한 콘텐츠를 커스텀 PHP REST API를 통해 WordPress에 자동 등록(중복 체크, 이미지 사이드로드 포함)', '加工したコンテンツをカスタムPHP REST API経由でWordPressへ自動登録（重複チェック・画像サイドロード含む）', lang)}</li>
                  <li>{tx('Make.com의 크레딧 소모를 줄이기 위해 반복 처리를 서버 사이드(PHP)에서 일괄 처리하도록 설계', 'Make.comのクレジット消費を抑えるため、繰り返し処理をサーバーサイド（PHP）で一括処理する設計に変更', lang)}</li>
                </ul>
              }
            />
            <FieldRow
              label={tx('당시 필요했던 IT 기술', '当時必要とされたIT技術', lang)}
              value={tx('Python, Google Places API, Make.com, Apify, Google Gemini API, PHP(REST API), WordPress, React/Next.js, Firebase, MySQL', 'Python、Google Places API、Make.com、Apify、Google Gemini API、PHP（REST API）、WordPress、React/Next.js、Firebase、MySQL', lang)}
            />
            <FieldRow
              label={tx('제작물 소개 (성과물)', '制作物紹介（成果物）', lang)}
              value={<span className="blank pb-0.5">{tx('URL / 결과물 링크: [ ]', 'URL／成果物リンク：[ ]', lang)}</span>}
              last
            />
            <div className="mt-6 rounded-xl overflow-hidden border" style={{ borderColor: 'var(--paper-line)' }}>
              <img src="/image/img03.png" alt={tx('업무 결과물 스크린샷', '業務成果物のスクリーンショット', lang)} className="w-full h-56 object-cover" />
              <p className="text-xs px-4 py-2" style={{ color: 'var(--ink-faint)' }}>
                {tx('개발한 매장 정보 수집 프로그램의 실행 화면', '開発した店舗情報収集プログラムの実行画面', lang)}
              </p>
            </div>
          </Sheet>

          {/* 03. 일본 생활 */}
          <Sheet id="life" num="03" refs={refs} kanji="生活記録" title={tx('일본에서의 생활 내용 · 체류 기록', '日本での生活内容・滞在記録', lang)}>
            <FieldRow
              label={tx('방문한 장소', '訪れた場所', lang)}
              value={tx(
                '숙소가 센다가야역 인근이라 신주쿠 · 시부야 · 하라주쿠 등 도쿄 중심지 접근이 편리했음. 퇴근 후와 주말을 활용해 도쿄 각지의 관광 명소를 답사.',
                '宿泊先が千駄ヶ谷駅の近くだったため、新宿・渋谷・原宿など東京中心部へのアクセスが便利だった。退勤後や週末を活用して東京各地の観光名所を巡った。',
                lang
              )}
            />
            <div className="mt-6 rounded-xl overflow-hidden border" style={{ borderColor: 'var(--paper-line)' }}>
              <img src="/image/img02.jpeg" alt={tx('일본 생활 및 관광 사진', '日本での生活および観光の写真', lang)} className="w-full h-56 object-cover" />
              <p className="text-xs px-4 py-2" style={{ color: 'var(--ink-faint)' }}>
                {tx('업무 외 시간을 활용한 도쿄 답사', '業務外の時間を活用した東京散策', lang)}
              </p>
            </div>
          </Sheet>

          {/* 04. 회고 및 성과 */}
          <Sheet id="reflection" num="04" refs={refs} kanji="振り返り" title={tx('체험에 대한 회고 및 성과', '体験についての振り返りと成果', lang)}>
            <FieldRow
              label={tx('참가하며 느낀 점', '参加して感じたこと', lang)}
              value={tx(
                '학교에서 배운 내용을 실제 업무에 적용해 보고, 막히는 부분을 스스로 고민해 새로운 방법을 시도하며 프로그램을 직접 개발해 본 경험을 통해 현업 적응에 대한 자신감을 얻었습니다.',
                '大学で学んだ内容を実務に応用し、行き詰まった部分は自分で考えて新しい方法を試しながらプログラムを直接開発した経験を通じて、実務への適応に自信を持てるようになりました。',
                lang
              )}
            />
            <FieldRow
              label={tx('일본어의 필요성', '日本語の必要性', lang)}
              value={tx(
                '담당자분들과 일본어로 회의를 진행하고 질의응답·피드백을 주고받으며 비즈니스 일본어를 자연스럽게 익힐 수 있었습니다.',
                '担当者の方々と日本語で会議を行い、質疑応答やフィードバックをいただく中で、ビジネス日本語を自然に身につけることができました。',
                lang
              )}
              last
            />
          </Sheet>

          <footer className="mt-16 pt-8 border-t text-xs" style={{ borderColor: 'var(--paper-line)', color: 'var(--ink-faint)' }}>
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
      className="sheet rounded-2xl p-6 md:p-10 mb-8 scroll-mt-8"
    >
      <div className="flex items-baseline gap-3 mb-6">
        <span className="font-mono text-xs px-2 py-1 rounded border" style={{ borderColor: 'var(--paper-line)', color: 'var(--seal)' }}>
          {num}
        </span>
        <span className="font-mono text-xs" style={{ color: 'var(--ink-faint)' }}>{kanji}</span>
      </div>
      <h2 className="font-display-ko text-2xl md:text-3xl font-bold mb-6" style={{ color: 'var(--ink)' }}>
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
    <div className={`grid grid-cols-1 md:grid-cols-[220px_1fr] gap-2 md:gap-6 ${last ? '' : 'pb-6 border-b'}`} style={{ borderColor: 'var(--paper-line)' }}>
      <p className="field-label pt-1">{label}</p>
      <div className="text-[15px] leading-relaxed" style={{ color: 'var(--ink)' }}>{value}</div>
    </div>
  );
}