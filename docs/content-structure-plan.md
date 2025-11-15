# Content Structure Plan - GKIDS Strategic Marketing Presentation

## 1. Material Inventory

**Content Files:**
- `docs/gkids_current_analysis/README.md` (168 строк, основные метрики, воронка, юнит-экономика)
- `docs/competitors_analysis/educational_centers_bishkek_analysis.md` (271 строка, 7 конкурентов, цены, позиционирование)
- `docs/scaling_strategy/gkids_scaling_strategy.md` (271 строка, стратегия на 4 недели, каналы, цели)
- `docs/monthly_plan/gkids_monthly_plan.md` (420 строк, интеграция каналов, контент-план, бюджеты)
- `docs/6month_plan/GKIDS_6month_development_plan.md` (316 строк, команда, AI, KPI, дорожная карта)
- `docs/audience_analysis/kyrgyzstan_audience_analysis.md` (237 строк, демография, платежеспособность, рынок)

**Visual Assets:**
- Нет готовых визуальных активов (используем декоративные элементы в дизайне)

**Data Files:**
- Все данные содержатся в markdown файлах (таблицы с метриками, расчетами, планами)

**Charts (if any):**
- Нет готовых чартов (будут созданы визуально в дизайне на основе данных)

## 2. Website Structure

**Type:** SPA (Single Page Application)

**Reasoning:** 
- Контент сфокусирован на единой презентации стратегии (9 секций)
- Общий объем ~2000 слов (краткие цифры и результаты)
- Единая цель: презентация стратегического анализа
- Линейное повествование: проблема → анализ → решение → результаты
- Соответствует формату executive presentation

## 3. Page/Section Breakdown

### Page 1: GKIDS Presentation (`/`)

**Purpose**: Презентация стратегического маркетингового анализа и плана масштабирования

**Content Mapping:**

| Section | Component Pattern | Data File Path | Content to Extract | Visual Asset |
|---------|------------------|-------------|-------------------|--------------|
| 1. Hero Section | Hero Pattern (500-600px) | `docs/gkids_current_analysis/README.md` L1-7 | Название проекта, ключевое сообщение о масштабировании | - |
| 2. Current Situation | Data Card Grid (4 карты) | `docs/gkids_current_analysis/README.md` L35-57, Таблица 1 | Лиды (300/нед), конверсия (7.35%), CPL ($0.59), цена (56,000 сом), потенциальная выручка (1,232,000 сом) | - |
| 3. Market Analysis | 2-column layout + data cards | `docs/audience_analysis/kyrgyzstan_audience_analysis.md` L8-14, L159-177 | Население Бишкека (1.2M), целевая аудитория (160-200K домохозяйств), емкость рынка (54M сом/год базовый), проникновение интернета (79.8%), пользователи соцсетей (2.95M) | - |
| 4. Competitor Analysis | Table + comparison grid | `docs/competitors_analysis/educational_centers_bishkek_analysis.md` L100-143, Таблицы 1-4 | 7 центров (CODIFY, Geeks Junior, РАЗВИВАЙКА, Strong, Чудо-Чадо, Солнечный город, Точка роста), ценовые диапазоны (3,000-25,000 сом), форматы, позиционирование | - |
| 5. Scaling Strategy | Icon grid (7 каналов) + metrics | `docs/scaling_strategy/gkids_scaling_strategy.md` L91-144, `docs/monthly_plan/gkids_monthly_plan.md` L69-89 | 7 каналов: YouTube Shorts, TikTok (Lead/Spark Ads), Instagram (Reels/DM), Telegram Ads, органика (контент/SEO), платная реклама, ретаргетинг. Цели: 90-110 лидов/день, конверсия 10-15%, CPL $0.30-$0.60, доля органики 30-35% | - |
| 6. 1-Month Plan | Timeline (4 недели) + KPI table | `docs/scaling_strategy/gkids_scaling_strategy.md` L164-181, `docs/monthly_plan/gkids_monthly_plan.md` L288-312 | Неделя 1: UTM-трекинг, бот, SLA. Неделя 2: Shorts/Reels, TikTok Ads, Telegram. Неделя 3: Бюджеты, A/B тесты. Неделя 4: Масштабирование. KPI: конверсия 10-15%, CPL $0.30-$0.60, выручка +20-35% | - |
| 7. 3-6 Month Plan | Roadmap table + team structure | `docs/6month_plan/GKIDS_6month_development_plan.md` L23-36, L74-98, L288-297 | Фаза 1 (мес 1-3): стабилизация воронки, базовая автоматизация, конверсия 10-15%, органика 30-35%. Фаза 2 (мес 4-6): масштабирование, AI-инструменты, команда 15 человек, органика 40-50%, выручка +50-100% | - |
| 8. Expected Results | Large metrics cards + ROI calc | `docs/6month_plan/GKIDS_6month_development_plan.md` L264-279 | К концу 3 мес: лиды 300-350/нед, конверсия 10-15%, выручка +20-35%. К концу 6 мес: лиды 350-500/нед, конверсия 12-18%, выручка +50-100%. ROI: 300-500% за 6 месяцев. Инвестиции: $15,000-$20,000 | - |
| 9. Conclusion + CTA | Centered CTA block | Синтез всех разделов | Итоговое сообщение о готовности к реализации, ключевые преимущества стратегии | - |

**CRITICAL NOTES:**

**Content Images Classification:**
- ❌ Нет контентных изображений (логотипы, скриншоты продуктов, фото команды)
- Все визуальные элементы будут декоративными (абстрактные паттерны, градиенты, геометрия)

**Extraction Rules:**
- Использовать точные цифры из таблиц (не округлять)
- Извлекать только ключевые метрики (не полный текст)
- Фокус на действиях и результатах (не на рассуждениях)
- Названия конкурентов и каналов как есть

**Forbidden in this file:**
- ❌ Не указывать цвета, выравнивание, размеры шрифтов
- ❌ Не описывать декоративные фоны
- ❌ Не указывать эффекты (тени, наложения)

## 4. Content Analysis

**Information Density:** High
- Высокая концентрация данных: 30+ ключевых метрик, 7 конкурентов, 7 каналов, таймлайны на 1 и 6 месяцев
- Множество числовых показателей требует четкой визуальной иерархии

**Content Balance:**
- Images: 0 (0%) - декоративные элементы создаются в дизайне
- Data/Charts: 15+ таблиц и метрик (80%) - основной контент
- Text: ~2000 слов (20%) - минималистичные описания

**Content Type:** Data-driven
- Фокус на цифрах, метриках, расчетах
- Таблицы требуют адаптации в data cards/визуальные элементы
- Высокая информационная плотность требует визуального разбиения на секции
