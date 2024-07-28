# s={10,20,30,40}
# print(s)
#
# s=set()
# print(s)
# s={}
# print(s,type(s))
#
# s=set('hello world')
# print(s)
#
# s1=set([10,20,30])
# print(s1)



#相关操作
s={10,20,30}

s.add(100)

s.remove(20)

# s.clear()
#
# print(s)

#遍历
for i in s:
    print(i)

for index,item in enumerate(s):
    print(index,item)

#生成式

s={i for i in range(1,10)}
print(s)
s={i for i in range(1,10) if i%2==1}
print(s)