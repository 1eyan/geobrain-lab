import type { Lang } from '../data/site';

export const languages: Lang[] = ['zh', 'en'];

export const ui = {
  zh: {
    nav: { home: '首页', guide: '新手指南', research: '研究方向', people: '团队成员', publications: '论文成果', projects: '项目', news: '动态' },
    common: { learnMore: '了解更多', viewAll: '查看全部', visitProject: '访问项目', sourceCode: '查看源码', contact: '学术联系', email: '发送邮件', verified: '核验于', back: '返回', all: '全部', reset: '清除筛选', noResults: '没有符合当前筛选条件的论文。' },
    home: {
      eyebrow: 'GeoBrain · PKU & HIT',
      titleA: '让地球物理', titleB: '更智能，也更可信。',
      intro: '我们连接人工智能、应用数学与勘探地球物理，研究可复现、可解释、可迁移的地下成像与数据处理方法。',
      researchTitle: '五条相互连接的研究路径',
      researchIntro: '从原始地震记录到地下结构、通用模型与可执行的地球物理智能体。',
      projectTitle: '为地震数据处理建立共同坐标系',
      papersTitle: '近期与代表性成果',
      newsTitle: '最新动态',
      contactTitle: '开放合作，连接真实问题与前沿方法。',
      contactText: '欢迎围绕智能地震处理、反演、人工智能算法、基础大模型与地球物理 Agent 开展学术交流。',
    },
  },
  en: {
    nav: { home: 'Home', guide: 'Starter Guide', research: 'Research', people: 'People', publications: 'Publications', projects: 'Projects', news: 'News' },
    common: { learnMore: 'Learn more', viewAll: 'View all', visitProject: 'Visit project', sourceCode: 'Source code', contact: 'Academic contact', email: 'Send email', verified: 'Verified', back: 'Back', all: 'All', reset: 'Reset filters', noResults: 'No publications match the current filters.' },
    home: {
      eyebrow: 'GeoBrain · PKU & HIT',
      titleA: 'Making geophysics', titleB: 'more intelligent — and trustworthy.',
      intro: 'We connect artificial intelligence, applied mathematics and exploration geophysics to build reproducible, interpretable and transferable methods for subsurface imaging and seismic processing.',
      researchTitle: 'Five connected research paths',
      researchIntro: 'From raw seismic records to subsurface structures, foundation models and executable geophysical agents.',
      projectTitle: 'A shared coordinate system for seismic processing research',
      papersTitle: 'Recent and selected work',
      newsTitle: 'Latest news',
      contactTitle: 'Open collaboration, grounded in real geophysical problems.',
      contactText: 'We welcome academic exchange across seismic processing, inversion, AI algorithms, foundation models and geophysical agents.',
    },
  },
} as const;

export function isLang(value: string | undefined): value is Lang {
  return value === 'zh' || value === 'en';
}

export function pathFor(lang: Lang, route = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = route.replace(/^\/+|\/+$/g, '');
  return `${base}/${lang}/${clean ? `${clean}/` : ''}`;
}

export function swapLanguagePath(lang: Lang, pathname: string) {
  const next = lang === 'zh' ? 'en' : 'zh';
  return pathname.replace(/\/(zh|en)(?=\/|$)/, `/${next}`);
}
