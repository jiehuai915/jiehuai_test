const sourceQualityRules = [
  {
    quality: "官方/监管",
    match: (source) => ["官方公告", "官方产品页", "官方产品/技术页", "官方资料", "监管文件"].includes(source.type)
  },
  {
    quality: "财报/年报",
    match: (source) => ["年报", "10-K", "10-Q", "财报电话会"].includes(source.type)
  },
  {
    quality: "公司资料",
    match: (source) => ["公司官网", "公司官网/IR", "公司 IR"].includes(source.type)
  },
  {
    quality: "技术资料",
    match: (source) => ["工程博客", "官方博客", "官方技术博客", "论文/技术报告", "工程论文"].includes(source.type)
  },
  {
    quality: "机构/框架",
    match: (source) => ["机构报告", "标准/框架", "安全框架"].includes(source.type)
  },
  {
    quality: "待核验",
    match: (source) => source.confidence === "低" || source.type.includes("待核验")
  }
];

function getSourceQuality(source) {
  if (!source) return "待核验";
  if (source.quality) return source.quality;
  const rule = sourceQualityRules.find((item) => item.match(source));
  return rule ? rule.quality : "研究参考";
}

function getSourceQualityClass(source) {
  return `quality-${getSourceQuality(source).replace(/[^\u3400-\u9fffA-Za-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}

window.sourceQualityRules = sourceQualityRules;
window.getSourceQuality = getSourceQuality;
window.getSourceQualityClass = getSourceQualityClass;
