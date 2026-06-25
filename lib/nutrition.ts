export type AudienceType = "general" | "baby-food" | "fitness-light-meal";

type NutrientsPer100g = {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
};

type FoodEntry = NutrientsPer100g & {
  name: string;
  aliases: string[];
  mlToGram?: number;
  unitWeights?: Partial<Record<string, number>>;
};

type ParsedIngredient = {
  raw: string;
  name: string;
  amount: number;
  unit: string;
};

type MatchedIngredient = ParsedIngredient & {
  food: FoodEntry;
  grams: number;
};

export type NutritionSummary = {
  audienceType: AudienceType;
  per100Text: string;
  coverageText: string;
  recognizedText: string;
  unrecognizedText: string;
  hasNutrition: boolean;
};

const FOOD_DATABASE: FoodEntry[] = [
  {
    name: "鸡胸肉",
    aliases: ["鸡胸肉", "鸡胸"],
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 3.6,
    fiber: 0
  },
  {
    name: "鸡蛋",
    aliases: ["鸡蛋", "蛋"],
    calories: 143,
    protein: 12.6,
    carbs: 0.7,
    fat: 9.5,
    fiber: 0,
    unitWeights: { 个: 50, 颗: 50, 枚: 50, 只: 50 }
  },
  {
    name: "西兰花",
    aliases: ["西兰花"],
    calories: 34,
    protein: 2.8,
    carbs: 6.6,
    fat: 0.4,
    fiber: 2.6
  },
  {
    name: "藜麦",
    aliases: ["藜麦", "熟藜麦"],
    calories: 120,
    protein: 4.4,
    carbs: 21.3,
    fat: 1.9,
    fiber: 2.8
  },
  {
    name: "燕麦",
    aliases: ["燕麦", "燕麦片"],
    calories: 389,
    protein: 16.9,
    carbs: 66.3,
    fat: 6.9,
    fiber: 10.6
  },
  {
    name: "牛油果",
    aliases: ["牛油果", "鳄梨"],
    calories: 160,
    protein: 2,
    carbs: 8.5,
    fat: 14.7,
    fiber: 6.7,
    unitWeights: { 个: 150, 颗: 150 }
  },
  {
    name: "番茄",
    aliases: ["番茄", "西红柿", "圣女果", "小番茄"],
    calories: 18,
    protein: 0.9,
    carbs: 3.9,
    fat: 0.2,
    fiber: 1.2,
    unitWeights: { 个: 150, 颗: 15 }
  },
  {
    name: "黄瓜",
    aliases: ["黄瓜", "青瓜"],
    calories: 15,
    protein: 0.7,
    carbs: 3.6,
    fat: 0.1,
    fiber: 0.5,
    unitWeights: { 根: 180 }
  },
  {
    name: "生菜",
    aliases: ["生菜", "罗马生菜"],
    calories: 15,
    protein: 1.4,
    carbs: 2.9,
    fat: 0.2,
    fiber: 1.3
  },
  {
    name: "紫薯",
    aliases: ["紫薯"],
    calories: 86,
    protein: 1.6,
    carbs: 20.1,
    fat: 0.1,
    fiber: 3
  },
  {
    name: "红薯",
    aliases: ["红薯", "地瓜"],
    calories: 86,
    protein: 1.6,
    carbs: 20.1,
    fat: 0.1,
    fiber: 3
  },
  {
    name: "南瓜",
    aliases: ["南瓜", "贝贝南瓜"],
    calories: 26,
    protein: 1,
    carbs: 6.5,
    fat: 0.1,
    fiber: 0.5
  },
  {
    name: "胡萝卜",
    aliases: ["胡萝卜", "红萝卜"],
    calories: 41,
    protein: 0.9,
    carbs: 9.6,
    fat: 0.2,
    fiber: 2.8,
    unitWeights: { 根: 80 }
  },
  {
    name: "土豆",
    aliases: ["土豆", "马铃薯"],
    calories: 77,
    protein: 2,
    carbs: 17,
    fat: 0.1,
    fiber: 2.2,
    unitWeights: { 个: 150 }
  },
  {
    name: "米饭",
    aliases: ["米饭", "熟米饭"],
    calories: 116,
    protein: 2.6,
    carbs: 25.9,
    fat: 0.3,
    fiber: 0.3
  },
  {
    name: "大米",
    aliases: ["大米", "米"],
    calories: 346,
    protein: 7.4,
    carbs: 77.9,
    fat: 0.8,
    fiber: 0.7
  },
  {
    name: "小米",
    aliases: ["小米"],
    calories: 361,
    protein: 9,
    carbs: 75.1,
    fat: 3.1,
    fiber: 1.6
  },
  {
    name: "香蕉",
    aliases: ["香蕉"],
    calories: 89,
    protein: 1.1,
    carbs: 22.8,
    fat: 0.3,
    fiber: 2.6,
    unitWeights: { 根: 100 }
  },
  {
    name: "苹果",
    aliases: ["苹果"],
    calories: 52,
    protein: 0.3,
    carbs: 13.8,
    fat: 0.2,
    fiber: 2.4,
    unitWeights: { 个: 200 }
  },
  {
    name: "蓝莓",
    aliases: ["蓝莓"],
    calories: 57,
    protein: 0.7,
    carbs: 14.5,
    fat: 0.3,
    fiber: 2.4
  },
  {
    name: "草莓",
    aliases: ["草莓"],
    calories: 32,
    protein: 0.7,
    carbs: 7.7,
    fat: 0.3,
    fiber: 2
  },
  {
    name: "芒果",
    aliases: ["芒果"],
    calories: 60,
    protein: 0.8,
    carbs: 15,
    fat: 0.4,
    fiber: 1.6
  },
  {
    name: "牛奶",
    aliases: ["牛奶", "纯牛奶"],
    calories: 61,
    protein: 3.2,
    carbs: 4.8,
    fat: 3.3,
    fiber: 0,
    mlToGram: 1.03
  },
  {
    name: "酸奶",
    aliases: ["酸奶", "希腊酸奶", "无糖酸奶"],
    calories: 59,
    protein: 10,
    carbs: 3.6,
    fat: 0.4,
    fiber: 0,
    mlToGram: 1.03
  },
  {
    name: "豆腐",
    aliases: ["豆腐", "嫩豆腐", "老豆腐"],
    calories: 76,
    protein: 8,
    carbs: 1.9,
    fat: 4.8,
    fiber: 0.3
  },
  {
    name: "虾仁",
    aliases: ["虾仁", "虾"],
    calories: 99,
    protein: 24,
    carbs: 0.2,
    fat: 0.3,
    fiber: 0
  },
  {
    name: "三文鱼",
    aliases: ["三文鱼", "鲑鱼"],
    calories: 208,
    protein: 20,
    carbs: 0,
    fat: 13,
    fiber: 0
  },
  {
    name: "橄榄油",
    aliases: ["橄榄油", "油"],
    calories: 884,
    protein: 0,
    carbs: 0,
    fat: 100,
    fiber: 0,
    unitWeights: { 勺: 10, 汤匙: 10, 茶匙: 5 }
  },
  {
    name: "水",
    aliases: ["水", "温水", "清水", "热水", "凉水"],
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    mlToGram: 1
  },
  {
    name: "茶",
    aliases: ["茶", "绿茶", "红茶", "茉莉绿茶", "茶汤"],
    calories: 1,
    protein: 0,
    carbs: 0.3,
    fat: 0,
    fiber: 0,
    mlToGram: 1
  },
  {
    name: "椰奶",
    aliases: ["椰奶", "椰浆"],
    calories: 188,
    protein: 2,
    carbs: 2.8,
    fat: 19,
    fiber: 0,
    mlToGram: 1.01
  },
  {
    name: "白砂糖",
    aliases: ["白砂糖", "砂糖", "糖"],
    calories: 387,
    protein: 0,
    carbs: 100,
    fat: 0,
    fiber: 0
  },
  {
    name: "白凉粉",
    aliases: ["白凉粉", "凉粉"],
    calories: 350,
    protein: 0,
    carbs: 87,
    fat: 0,
    fiber: 0
  }
];

const BABY_KEYWORDS = [
  "宝宝",
  "辅食",
  "儿童",
  "幼儿",
  "月龄",
  "米糊",
  "泥",
  "蒸蛋",
  "手指食物"
];

const STRONG_BABY_KEYWORDS = ["宝宝", "辅食", "月龄"];

const FITNESS_KEYWORDS = [
  "减脂",
  "健身",
  "轻食",
  "低卡",
  "高蛋白",
  "沙拉",
  "鸡胸肉",
  "鸡胸",
  "燕麦",
  "藜麦",
  "低脂"
];

export function analyzeRecipeNutrition(input: {
  recipeName: string;
  ingredients: string;
  steps: string;
}): NutritionSummary {
  const content = `${input.recipeName} ${input.ingredients} ${input.steps}`;
  const audienceType = detectAudienceType(content);
  const parsedIngredients = parseIngredients(input.ingredients);
  const matchedIngredients = parsedIngredients
    .map((ingredient) => matchIngredient(ingredient))
    .filter((ingredient): ingredient is MatchedIngredient => Boolean(ingredient));
  const matchedRaw = new Set(matchedIngredients.map((ingredient) => ingredient.raw));
  const unrecognizedIngredients = input.ingredients
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !matchedRaw.has(line));

  if (matchedIngredients.length === 0) {
    return {
      audienceType,
      per100Text: "营养估算：食材重量或营养库暂未匹配，图中不要展示具体热量数值。",
      coverageText: "估算范围：未匹配到可计算食材。",
      recognizedText: "已识别食材：无。",
      unrecognizedText: buildUnrecognizedText(unrecognizedIngredients),
      hasNutrition: false
    };
  }

  const totalGrams = sum(matchedIngredients.map((ingredient) => ingredient.grams));
  const totals = matchedIngredients.reduce<NutrientsPer100g>(
    (result, ingredient) => {
      const ratio = ingredient.grams / 100;

      return {
        calories: result.calories + ingredient.food.calories * ratio,
        protein: result.protein + ingredient.food.protein * ratio,
        carbs: result.carbs + ingredient.food.carbs * ratio,
        fat: result.fat + ingredient.food.fat * ratio,
        fiber: result.fiber + ingredient.food.fiber * ratio
      };
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 }
  );
  const per100 = divideNutrients(totals, totalGrams / 100);
  const recognizedNames = Array.from(
    new Set(matchedIngredients.map((ingredient) => ingredient.food.name))
  );

  return {
    audienceType,
    per100Text: `营养估算角标：每100g约 ${Math.round(per100.calories)} kcal，蛋白质 ${formatGram(per100.protein)}g，碳水 ${formatGram(per100.carbs)}g，脂肪 ${formatGram(per100.fat)}g，膳食纤维 ${formatGram(per100.fiber)}g。`,
    coverageText: `估算范围：仅基于可识别且带克重/可换算单位的食材估算，已识别约 ${Math.round(totalGrams)}g 原始食材，不计算烹饪水分流失、吸油或蒸发。`,
    recognizedText: `已识别食材：${recognizedNames.join("、")}。`,
    unrecognizedText: buildUnrecognizedText(unrecognizedIngredients),
    hasNutrition: true
  };
}

function detectAudienceType(content: string): AudienceType {
  const hasStrongBabyKeyword = STRONG_BABY_KEYWORDS.some((keyword) =>
    content.includes(keyword)
  );
  const hasBabyKeyword = BABY_KEYWORDS.some((keyword) => content.includes(keyword));
  const hasFitnessKeyword = FITNESS_KEYWORDS.some((keyword) => content.includes(keyword));

  if (hasStrongBabyKeyword) {
    return "baby-food";
  }

  if (hasFitnessKeyword) {
    return "fitness-light-meal";
  }

  if (hasBabyKeyword) {
    return "baby-food";
  }

  return "general";
}

function parseIngredients(ingredients: string): ParsedIngredient[] {
  return ingredients
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map(parseIngredientLine)
    .filter((ingredient): ingredient is ParsedIngredient => Boolean(ingredient));
}

function parseIngredientLine(line: string): ParsedIngredient | null {
  const cleanedLine = line
    .replace(/^[\d一二三四五六七八九十]+[.、\s-]*/, "")
    .replace(/[，,；;。].*$/, "")
    .trim();
  const match = cleanedLine.match(
    /(\d+(?:\.\d+)?)\s*(kg|公斤|斤|g|克|ml|毫升|个|颗|枚|只|根|片|块|勺|汤匙|茶匙)/i
  );

  if (!match || match.index === undefined) {
    return null;
  }

  const amount = Number(match[1]);
  const unit = normalizeUnit(match[2]);
  const beforeAmount = cleanedLine.slice(0, match.index).trim();
  const afterAmount = cleanedLine.slice(match.index + match[0].length).trim();
  const nameSource = beforeAmount || afterAmount;
  const name = normalizeIngredientName(nameSource);

  if (!name || Number.isNaN(amount)) {
    return null;
  }

  return {
    raw: line,
    name,
    amount,
    unit
  };
}

function matchIngredient(ingredient: ParsedIngredient): MatchedIngredient | null {
  const food = findFoodEntry(ingredient.name);

  if (!food) {
    return null;
  }

  const grams = convertToGrams(ingredient, food);

  if (!grams) {
    return null;
  }

  return {
    ...ingredient,
    food,
    grams
  };
}

function findFoodEntry(name: string): FoodEntry | undefined {
  const normalizedName = normalizeIngredientName(name);
  const entries = [...FOOD_DATABASE].sort(
    (a, b) => longestAliasLength(b) - longestAliasLength(a)
  );

  return entries.find((entry) =>
    entry.aliases.some((alias) => {
      const normalizedAlias = normalizeIngredientName(alias);

      return (
        normalizedName.includes(normalizedAlias) ||
        normalizedAlias.includes(normalizedName)
      );
    })
  );
}

function convertToGrams(ingredient: ParsedIngredient, food: FoodEntry): number | null {
  if (ingredient.unit === "g") {
    return ingredient.amount;
  }

  if (ingredient.unit === "kg") {
    return ingredient.amount * 1000;
  }

  if (ingredient.unit === "斤") {
    return ingredient.amount * 500;
  }

  if (ingredient.unit === "ml") {
    return ingredient.amount * (food.mlToGram ?? 1);
  }

  const unitWeight = food.unitWeights?.[ingredient.unit];

  if (unitWeight) {
    return ingredient.amount * unitWeight;
  }

  return null;
}

function normalizeUnit(unit: string): string {
  const normalizedUnit = unit.toLowerCase();

  if (normalizedUnit === "克") {
    return "g";
  }

  if (normalizedUnit === "公斤") {
    return "kg";
  }

  if (normalizedUnit === "毫升") {
    return "ml";
  }

  return normalizedUnit;
}

function normalizeIngredientName(name: string): string {
  return name
    .replace(/\d+(?:\.\d+)?/g, "")
    .replace(/kg|公斤|斤|g|克|ml|毫升|个|颗|枚|只|根|片|块|勺|汤匙|茶匙/gi, "")
    .replace(/适量|少许|少量|若干|约|大约|左右|切片|切块|熟|生/g, "")
    .replace(/[\s:：,，;；.。()（）【】\[\]-]/g, "");
}

function divideNutrients(nutrients: NutrientsPer100g, divisor: number): NutrientsPer100g {
  return {
    calories: nutrients.calories / divisor,
    protein: nutrients.protein / divisor,
    carbs: nutrients.carbs / divisor,
    fat: nutrients.fat / divisor,
    fiber: nutrients.fiber / divisor
  };
}

function formatGram(value: number): string {
  return value < 10 ? value.toFixed(1) : Math.round(value).toString();
}

function sum(values: number[]): number {
  return values.reduce((result, value) => result + value, 0);
}

function longestAliasLength(entry: FoodEntry): number {
  return Math.max(...entry.aliases.map((alias) => alias.length));
}

function buildUnrecognizedText(unrecognizedIngredients: string[]): string {
  if (unrecognizedIngredients.length === 0) {
    return "未识别食材：无。";
  }

  return `未识别或缺少可换算用量的食材：${unrecognizedIngredients.join("、")}。`;
}
