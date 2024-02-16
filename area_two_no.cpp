#include<stdio.h>
void area(int a,int b)
{
	int result=a*b;
	printf("area of square=%d",result);
}
int main()
{
	int a,b;
	printf("enter two number\n");
	scanf("%d%d",&a,&b);
	area(a,b);
	
}

