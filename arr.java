
import java.util.Scanner;

public class arr {
     public static void main(String[] args) {
        int num;
         int arr[]=new  int[12];
         Scanner obj=new Scanner(System.in);
       for(int i=0;i<arr.length;i++){
        arr[i]=obj.nextInt();
       }

         for(int i=0 ;i<arr.length;i++){
            for(int j=1;j<arr.length;j++){
                if(arr[i]>arr[j]){
                    num=arr[i];

                }
                else{
                    continue;
                }
            }
         }
     }
}
