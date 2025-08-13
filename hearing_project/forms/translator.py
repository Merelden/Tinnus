# import pandas as pd
# from deep_translator import GoogleTranslator

# # Загрузка CSV
# df = pd.read_csv("Товары шопи.csv")

# # Укажи только те колонки, которые нужно перевести
# columns_to_translate = ['Title', 'ShortDescription', 'CategoryName', 'MoreCategories']

# for col in columns_to_translate:
#     if col not in df.columns:
#         print(f"Колонка '{col}' не найдена в файле — пропущено.")
#         continue

#     print(f"Переводим колонку: {col}")

#     def safe_translate(x):
#         if not isinstance(x, str) or not x.strip():
#             return x
#         try:
#             result = GoogleTranslator(source='auto', target='ru').translate(x)
#             print(f"OK: {x[:30]} → {result[:30]}")
#             return result
#         except Exception as e:
#             print(f"Ошибка при переводе '{x[:30]}': {e}")
#             return x

#     df[col] = df[col].astype(str).apply(safe_translate)

# # Сохранение переведённого файла
# df.to_csv("Товары_шопи_переведённый.csv", index=False, encoding='utf-8-sig')
# print("Готово: файл сохранён как 'Товары_шопи_переведённый.csv'")
import pandas as pd

# Загрузка переведённого файла
file_path = './Товары_шопи_переведённый.csv'
df = pd.read_csv(file_path)

# Переименуем колонку с изображениями, если она есть
if 'FileName' in df.columns:
    df.rename(columns={'FileName': 'Image Src'}, inplace=True)

# Удалим все строки, у которых в колонке "Image Src" пусто (Shopify не примет)
df['Image Src'] = df['Image Src'].replace('nan', pd.NA)
df = df.dropna(subset=['Image Src'])

# Убедимся, что колонки с ценами в нужном формате
for price_col in ['RetailPrice', 'SellPrice']:
    if price_col in df.columns:
        df[price_col] = pd.to_numeric(df[price_col], errors='coerce')

# Сохраняем обновлённый файл
output_path = './shopify_ready_products.csv'
df.to_csv(output_path, index=False, encoding='utf-8-sig')

output_path
