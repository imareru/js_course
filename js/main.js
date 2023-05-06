//comment

        /*
        another
        comment
        */

        document.write("JavaScript says Hello!");
        console.log("This is log");
        console.error("ERROR");
        console.warn("Warning");

        var num = 5;
        console.log("Variable: " + num);

        num = 7;
        console.log("New variable: " + num);
        var num_2 = 2;

        console.log(num-num_2);

        var num_3 = 5;
        num_3 = num_3 + 7;
        console.log(num_3);

        var str_1 = Number("12");
        var str_2 = Number("2");
        console.log("Stroke: " + (str_1+str_2));

        console.log("PI = " + Math.PI);
        console.log("E = " + Math.E);
        console.log("Min = " + Math.min(1, 2, 3, 4, 5));


        //циклы
        if(num_2 == 5){
                console.log("OK");
        } else if(num_2 > 5) {
                console.log("<");
        } else {
                console.log("Else!");
        }

        var isHasHouse = true;

        if(num_2 == 5 || isHasHouse==true){
                console.log("||");
        }

        var stroke = "word";

        switch(stroke){
                case "4": 
                        console.log("4");
                        break;
                case "word":
                        console.log(stroke);
                        break;
                default:
                        console.log("Nothing");
                        break;
        }

        //arrays
        var arr = [5, true, "stroka", 5.7, 0, -100];

        console.log(arr[0]);
        arr[0] = false;
        console.log(arr[0]);
        console.log(arr.length);

        var matrix = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
        ]

        matrix[2][2] = 0;
        console.log(matrix);

        //cycles
        for(var i = 100; i > 5; i/=2){
                console.log(i);
        }

        var j = 0;
        while(j < 10){
                console.log(j);
                j++;
        }

        var isHasCar = true;
        while(isHasCar){
                isHasCar = false;
                console.log(isHasCar);
        }

        console.log("---------------------");
        var x = 0;
        do {
                console.log(x);
                x++;
        } while(x < 10);
        
        console.log("---------------------");

        for(var i = 10; i <= 20; i+=2){
                if(i>15)
                break;
                console.log(i);
        }

        console.log("---------------------");
        for(var i = 10; i <= 20; i++){
                if(i%2 == 0)
                continue;
                console.log(i);
        }

        var matrix2 = [
                [43, 4315, 134],
                [34, 21, 34],
                [123, 54, 33]
        ]
        console.log("---------------------");
        for(var k = 0; k < matrix2.length; k++){
                console.log(k + ": " + matrix2[k]);
                
        }

        //alerts

        // alert("Click 'ok'");
//        var ok = confirm("cansel or ok");
//        console.log(ok);

//        var data = prompt("Say ur age: ", 20);
//        console.log(data);

        // var person;
        // if(confirm("Click")){
        //         person = prompt("Enter ur name");
        //         alert("Hello, " + person);
        // } else {
        //         alert("You are wrong, loser :)");
        // }

        //functions, local and global vars
        function info(word){
                console.log("info");
                console.log("other info... " + word);
        }

        info("hi");
        
        function summa(a, b){
                var res = a + b;
                console.log(res);
                info(res);
        }

        summa(5, 3);

        function summa_2(arr){
                var sum = 0;
                for(var i = 0; i<arr.length; i++){
                        sum += arr[i];
                }
                console.log(sum);
                return sum;
        }
        var arrs = [1, 2, 3];
        // var arrs3 = [1, 2];
        // var arrs4 = [1, 2, 3, 45];
        // var arrs5 = [1, 2, 3, 3, 5, 2];

        var results = summa_2(arrs);
        console.log("Result is " + results);

        // summa_2(arrs3);
        // summa_2(arrs4);
        // summa_2(arrs5);

