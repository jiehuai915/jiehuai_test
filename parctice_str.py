# Initialize a string variable with the value "HelloWorld"
s = "HelloWorld"

# Print the original string
print(s)
#1.1
# Replace all occurrences of 'o' in the string with '你好' (which means "hello" in Chinese)
# new_s = s.replace('o', '你好')

# Print the modified string
# print(new_s)

#1.2
# Center the string 's' within a width of 20 characters
# The default fill character is a space
# new_s_1 = s.center(20)

# Print the centered string with default spaces
# print(new_s_1)

# Center the string 's' within a width of 20 characters
# Use '*' as the fill character
# print(s.center(20, '*'))

#1.3
# #Define a string variable
# s1 = "dl_helloworld_ld"
#
# # Remove the leading characters 'l' and 'd' from the string
# leading_removed = s1.lstrip('ld')
# print(leading_removed)  # Output: _helloworld
#
# # Remove the trailing characters '_' and 'l' and 'd' from the string
# trailing_removed = s1.rstrip('_ld')
# print(trailing_removed)  # Output: dl_hellowor

# #1.4
# # Define the variables for name, age, and score
# name = '马冬梅'  # Name of the student
# age = 18        # Age of the student
# score = 98.5    # Score of the student
#
# # Print the student's information in a formatted string
# print('姓名: %s, 年龄: %d, 成绩: %.1f' % (name, age, score))

#1.5 f_string
# Define student information
# student_name = '马冬梅'  # Name of the student
# student_age = 18         # Age of the student
# student_score = 98.5     # Score of the student
#
# # Print student information in a formatted string
# print(f'姓名: {student_name}, 年龄: {student_age}, 成绩: {student_score}')

#1.6 format
# Define the student's information
# student_name = '马冬梅'  # Name of the student
# student_age = 18         # Age of the student
# student_score = 98.5     # Score of the student
#
# # Print the student's information in a formatted string
# print('姓名：{0}，年龄：{1}，成绩：{2}'.format(student_name, student_age, student_score))

