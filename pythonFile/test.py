COUNT = 'ZHANG'
print(COUNT)

# 数字
a = b = c = 1
b = 3

d,f,e = 1,4,6
print a,b,c

print d,f,e

del d
# print d

# 列表
list = [1,'4',44,'zhangheng']
ccpylist = ['a','b','c']
print list

print list[3]

print list[2:]

print list*3

print list+ccpylist

# 元祖不可更改
cell = ('1','c','vv','ww')

print(cell)

# 字典
tinydict = {"name":'zhang',"age":14,"sex":"南"}

print tinydict['name']

print tinydict.keys()

print tinydict.values()


# 运算符
a = 1
b = 3
print a<>b

print a<=b, a>=b
a*=b
print a
a = 1
a/=b

print a

# 条件语句
v = 2

while v<10:
     if(v % 2==0):
         print (v,'shuang')

     else:
         print (v,'old')

     v+=1


#循环语句
names = ['xiaohong','xiaoming','xiaogang']
print range(len(names)),len(names)
for index in range(len(names)):
    print index,names[index]

numbers = [24,325,235,354333,346,3,5]
even = []
odd = []
print len(numbers)

while len(numbers)>0:
     number = numbers.pop()
     if(number%2==0):
          even.append(number)
     else:
          odd.append(number)

print even,odd

# pass语句

for letter in 'zhangheng':
    if(letter=='e'):
        pass
        print '跳过'


    print letter


num = 1

print '这是'+str(num)

# 日期和时间
import time
ticks= time.time()
print '当前时间:',ticks

print '当前年月日：',time.strftime("%Y-%m-%d",time.localtime())
print '当前时间：',time.strftime("%Y-%m-%d %H:%M:%S",time.localtime())

# 日历
import calendar
cal = calendar.month(1990,4)
print cal

# 函数

def changeName(name):

    if(name=='zhang'):

        print '你的名字'+name

    else:
        print '错误信息'

changeName('小花')
changeName('笑容'),
changeName('zhang')
changeName('微笑')
# 匿名函数

sum = lambda num1,num2:num1%num2

print sum(1,4),sum(20,10)

# 模块
import math
print dir(math)
print math.pi


from run_page.run1 import run1
from run_page.run2 import run2
run1()
run2()

# 文件i/o

input_read = raw_input('323efwefewffewffewfewffffefewfewfwefwewrrr2r1r21r23rr2r2')

print '你输入的内容是:',input_read
