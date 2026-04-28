import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "菜谱提示词生成助手",
  description: "根据菜名、食材和步骤生成结构化绘图 Prompt"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
