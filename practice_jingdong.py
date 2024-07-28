#需求:从键盘录入5个商品信息(1001手机)添加到商品列表中，展示商品信息提示用户选择商品，用户选中的商品添加到购物车中(购物车中的商品要逆序).用户选中的商品不存在需要有相应提示，当用户输入“q”时循环结束，显示购物车中的商品。
#创建一个空列表存储商品信息
# Create a dictionary to store goods with their corresponding names
goods_dict = {}

# Input goods and their names for 5 times
for _ in range(5):
    goods_id = input('Enter the goods ID: ')
    goods_name = input('Enter the goods name: ')
    goods_dict[goods_id] = goods_name

# Output all goods information
for goods_id, goods_name in goods_dict.items():
    print(f'{goods_id}: {goods_name}')

# Prompt the user to choose goods and add them to the shopping cart
shopping_cart = []
while True:
    goods_choice = input('Select the goods you want to purchase (Enter q to quit): ')
    if goods_choice == 'q':
        break
    if goods_choice in goods_dict:
        shopping_cart.append(goods_dict[goods_choice])
        print('The selected goods have been added to the shopping cart.')
    else:
        print('Invalid goods ID. Please try again.')

print('Your shopping_cart has: ')
shopping_cart.reverse()
for item in shopping_cart:
    print(item)

