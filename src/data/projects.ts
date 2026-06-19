// 制作物データ（ここに 1 件追加するだけでカードが増える＝CMS的に管理）。
export type ProjectKind = "個人開発" | "業務";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  kind: ProjectKind;
  badges: string[]; // 種別以外の小バッジ
  featured?: boolean;
  image?: string; // public/ 内のファイル名
  imageHost?: string; // ブラウザ風モックに表示するホスト名
  demoUrl?: string;
  demoLabel?: string;
  repoUrl?: string;
  problem: string;
  approach: string;
  result: string;
  role: string;
  features?: string[];
  stack: string[];
}

export const projects: Project[] = [
  {
    slug: "aio-lens",
    title: "AIO Lens",
    subtitle: "生成AI時代のWeb可視性診断ツール",
    kind: "個人開発",
    badges: ["Featured"],
    featured: true,
    image: "aio-lens-summary.png",
    imageHost: "aio-lens.vercel.app",
    demoUrl: "https://aio-lens.vercel.app",
    demoLabel: "デモを開く",
    repoUrl: "https://github.com/sotaro0000/aio-lens",
    problem:
      "検索の主役が「リンク一覧」から「生成AIの回答」へ移行する中、SEO の次の論点として AIO（AI最適化）が台頭。しかし「自社・顧客ページが“AIから見て”引用されやすいか」を定量把握する手段がなかった。",
    approach:
      "URL を解析し、AIへの引用されやすさを 6 軸・45+項目でスコア化。ルールベース診断を土台に LLM を“強化レイヤー”として組み合わせるハイブリッド設計を採用し、APIキー未設定・LLM障害時もグレースフルに縮退する構成とした。SSRF対策・プロバイダ非依存のLLM抽象化も実装。",
    result:
      "企画・設計・実装・公開（Vercel）まで個人で一貫対応。AIエンジニアリングとマーケティング双方の知見を融合した、差別化された実用ツールとして公開中。",
    role: "企画・要件定義・設計・実装・公開（個人）",
    features: [
      "構造化データ／引用性／構造／E-E-A-T／メタ／クローラビリティの6軸診断",
      "ルールベース＋LLMのハイブリッド設計（キー無しでも動作）",
      "改善提案・JSON-LD 自動生成（LLM有効時）",
    ],
    stack: ["Next.js 16", "TypeScript", "React 19", "Tailwind CSS", "cheerio", "OpenAI / Anthropic", "Vercel"],
  },
  {
    slug: "diagram-studio",
    title: "Diagram Studio",
    subtitle: "図解スライド自動生成ツール（ノーコード・登録不要）",
    kind: "個人開発",
    badges: ["ノーコード図解 / 自動生成"],
    image: "diagram-studio.png",
    imageHost: "growth-arch-app.pages.dev",
    demoUrl: "https://growth-arch-app.pages.dev/",
    demoLabel: "サイトを開く（登録不要・無料）",
    problem:
      "議事録・面談メモを資料化するのは手間がかかる。PowerPoint が無い人やデザインに不慣れな人でも、短時間で“伝わる”図解スライドを作りたい。",
    approach:
      "「質問に順番に答える／録音の文字起こしを取り込む」だけで、内容に最適なレイアウト（フロー・比較・2×2・ピラミッド・タイムライン等）を自動選択して構成。重要文抽出・重複圧縮・話者ラベル除去をブラウザ内のローカル処理で実装し、APIキー無しでも完結。Anthropic API（任意）で高品質化も可能。出力はスライド形式(.pptx)と PNG。",
    result:
      "企画〜実装〜公開まで個人で一貫。登録不要・無料・AI 任意の単一ファイル静的アプリとして公開。Cloudflare Pages で配信し、Docker/Caddy による社内配信構成も用意。主要フローは Playwright で E2E 検証。",
    role: "企画・UI/UX・実装・公開（個人）／ 配信：Cloudflare Pages・Docker(Caddy)",
    features: [
      "質問に答えるだけの全画面ウィザード（診断形式）",
      "録音/文字起こし → 要点を自動整理（AI 不要）",
      "用途別テンプレート 13 種・.pptx / PNG 出力",
      "音声/動画はブラウザ内 Whisper で文字起こし",
    ],
    stack: ["JavaScript（単一ファイル）", "PptxGenJS", "html-to-image", "Transformers.js (Whisper)", "Anthropic API（任意）", "Cloudflare Pages", "Docker / Caddy", "Playwright"],
  },
  {
    slug: "tech-doc-assistant",
    title: "Tech Doc Assistant",
    subtitle: "AIドキュメント管理システム（フルスタック / RAG）",
    kind: "個人開発",
    badges: ["フルスタック / RAG"],
    image: "tech-doc-assistant.png",
    imageHost: "tech-doc-assistant.vercel.app",
    demoUrl: "https://tech-doc-assistant.vercel.app",
    demoLabel: "サイトを開く（閲覧には GitHub ログインが必要）",
    problem: "新規プロジェクト配属に向け、実務で使う技術スタックを「動くプロダクト」を通じて網羅的に習得する必要があった。",
    approach:
      "技術ドキュメントを AI で管理・検索できるフルスタックアプリを設計。GPT-4 + ベクトルDB(Pinecone) による RAG で自然言語検索・質問応答を実装し、Notion連携・CSV/Excel のデータ分析・外部DB接続・GitHub OAuth 認証まで搭載。Docker + GitHub Actions で CI/CD を整備。",
    result:
      "フロント(Next.js 14)〜バックエンド(FastAPI)〜RAG基盤〜インフラ(Docker/CI/CD)まで一人で一気通貫に構築・公開。実務想定の技術スタックを横断的に習得した。",
    role: "企画・設計・実装・公開（個人）／ デプロイ：Vercel・Azure / AWS 構成",
    features: [
      "Markdown ドキュメントの作成・管理",
      "RAG による AI 検索・質問応答（GPT-4）",
      "Notion 連携・CSV/Excel 自動データ分析",
      "外部 DB 接続・GitHub OAuth 認証",
    ],
    stack: ["Next.js 14", "TypeScript", "Tailwind / shadcn/ui", "FastAPI", "GPT-4 / Pinecone", "pandas / Plotly", "PostgreSQL", "Docker", "GitHub Actions"],
  },
  {
    slug: "ai-research-agent",
    title: "AI Research Agent",
    subtitle: "自律型リサーチエージェント",
    kind: "個人開発",
    badges: ["AIエージェント"],
    image: "ai-research-agent.png",
    imageHost: "ai-research-agent",
    demoUrl: "https://sotaro0000-research-agent.vercel.app",
    demoLabel: "サイトを開く",
    repoUrl: "https://github.com/sotaro0000/ai-research-agent",
    problem: "市場・競合リサーチは「検索→精読→要約→構造化」に多くの工数がかかる定型作業。これを自動化したい。",
    approach:
      "AIエージェントが「調査計画 → Web検索 → レポート合成」を自律実行。実行ステップを可視化し、LLM(OpenAI/Anthropic)・検索(Tavily/Serper)をプロバイダ非依存で抽象化。APIキーの有無で3段階に縮退する堅牢設計（demo / 知識ベース / 実検索＋出典付き）。",
    result:
      "企画〜実装〜公開まで個人で一貫。“計画・ツール実行・合成”のエージェント設計を実装し、競合比較・SWOT・推奨アクションを出典付きで自動生成。",
    role: "企画・要件定義・設計・実装・公開（個人）／ デプロイ：Vercel",
    features: [
      "調査計画の自動立案（サブクエリ分解）",
      "複数クエリでのWeb検索（ツール実行）",
      "競合比較表 / 市場トレンド / SWOT / 推奨アクション",
      "出典付きレポート・実行ステップの可視化",
    ],
    stack: ["Next.js 16", "TypeScript", "React 19", "Tailwind CSS", "OpenAI / Anthropic", "Tavily / Serper", "Vercel"],
  },
  {
    slug: "internal-rag",
    title: "AIを活用した社内業務効率化プラットフォーム（RAG）",
    subtitle: "チーム開発（プロジェクトリーダー）・本番リリース済み",
    kind: "業務",
    badges: ["チーム開発（PL）", "本番リリース済み"],
    problem: "社内固有のドキュメント検索や定型文作成が属人的で工数大、ヒューマンエラーも発生していた。",
    approach:
      "市場調査・ユーザーインタビューで真に必要な機能を特定し、社内ナレッジを安全に参照できる LLM ベースの RAG システムを企画・構築。LLMへの送信前に個人情報をマスキングする前処理層、OAuth2.0/JWT 認証、CI/CD、コスト監視基盤まで整備。",
    result: "対象部署の業務効率を20%向上、開発全体の納期を50%短縮、30%のコスト削減を実現。",
    role: "プロジェクトリーダー兼AIフルスタックエンジニア（要員4名・約6ヶ月）。要件定義〜LLM技術選定〜バックエンドAPI〜RAGパイプライン〜進行管理を横断リード。",
    stack: ["React", "FastAPI", "LangChain", "Pinecone", "PostgreSQL", "AWS ECS", "GitHub Actions"],
  },
  {
    slug: "design-doc-automation",
    title: "設計書→打鍵表のAI自動化 ＆ AIマーケ施策",
    subtitle: "業務（AI / マーケティング）",
    kind: "業務",
    badges: ["業務（AI / マーケ）"],
    problem: "設計書からのテスト打鍵表作成が手作業で工数大。並行して、AI時代の検索流入（AIO）対策が必要だった。",
    approach:
      "設計書からテスト打鍵表の生成を RAG で自動化（非構造データを JSON/Markdown へ正規化）。並行して、AIO による AI 概要欄反映を狙った Web サイト制作・運用、MAツールの AI 強化（UI/UX最適化）を担当。",
    result: "非構造化データの前処理により回答精度を向上。AIO/SEO 施策で検索順位・CV 改善を支援。",
    role: "実装・テスト（AI自動化）／ プランナー・AI開発・運用（マーケ）",
    stack: ["RAG", "LangChain", "Dify", "Azure OpenAI", "SEO / AIO"],
  },
];
