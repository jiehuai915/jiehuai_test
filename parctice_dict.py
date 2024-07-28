
# import random
#
# d={item : random.randint(1,100) for item in range(1,11)}
# print(d)
#
#
#
# list1=[1,2,3,4]
# list2=['x','y','z','q']
#
# dict1={key:value for key,value in zip(list1,list2)}
#
# print(dict1)


d1={'a':10,'b':20}
d2={'c':30,'d':40}

merge_dict=d1|d2
print(merge_dict)
