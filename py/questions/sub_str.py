def is_sub_string(str,check_str):
    for i in range(0, len(str)  - len(check_str)):
        sub_string = str[i:len(check_str)+i]
        
        if sub_string == check_str:
            return True

    return False


def get_sub_string(string,start,end):
    sub_string = ""

    for i in range(start, end):
        sub_string += string[i]
    
    return  sub_string


print(get_sub_string("hello there",0,5))