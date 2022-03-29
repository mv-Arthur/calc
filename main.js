function calc(){
    let select = document.getElementById('second').selectedIndex;
    let option = document.getElementById('second').querySelectorAll('option')[select];
    
    let select_first = document.getElementById('first').selectedIndex;
    let option_first = document.getElementById('first').querySelectorAll('option')[select];

    let group_name = option_first.innerHTML;
    let name = option.innerHTML;
    let url = option.getAttribute('url');
    let price = Number(option.getAttribute('price'));
    let rashod = Number(option.getAttribute('rashod'));
    let weight = Number(option.getAttribute('weight'));
    let first = document.getElementById('button1').value;
    let second = document.getElementById('button2').value;
    let calc_output = +(rashod * first * second /1000).toFixed(2);
    if(Math.ceil(calc_output/weight) == 1){
        let price_all = price * Math.ceil(calc_output/weight);
        var output_text_two_string_help = Math.ceil(calc_output/weight) + ' (мешка весом ' + weight + ' кг)';
        var output_text_three_string = 'Стоимость ' + Math.ceil(calc_output/weight) + ' мешка весом ' + weight + ' кг - ' + price_all + ' руб.';
    }
    else{
        let price_all = price * Math.ceil(calc_output/weight);
        var output_text_two_string_help = Math.ceil(calc_output/weight) + ' (мешков весом ' + weight + ' кг)';
        var output_text_three_string = 'Стоимость ' + Math.ceil(calc_output/weight) + ' мешков весом ' + weight + ' кг - ' + price_all + ' руб.';
    }

    let output_text_one_string = 'На поверхность площадью <b id="input_data">' + first + '</b> м2 и толщиной слоя <b id="input_data">' + second + '</b> мм требуется:';
    let output_text_two_string = '<b id="input_data">' + (calc_output) + '</b> кг ' + output_text_two_string_help  

    function output(){
        let container = document.createElement('div');

        let output_zag = document.createElement('h1');
        output_zag.innerHTML = ('Расчёт');
        output_zag.setAttribute('id', 'output_zag');

        let output_text_one = document.createElement('p');
        output_text_one.innerHTML = (output_text_one_string);
        output_text_one.setAttribute('id', 'output_text_one');

        let output_text_two = document.createElement('p');
        output_text_two.innerHTML = (output_text_two_string);
        output_text_two.setAttribute('id', 'output_text_two');

        let output_text_three = document.createElement('p');
        output_text_three.innerHTML = (output_text_three_string);
        output_text_three.setAttribute('id', 'output_text_three')

        let tovar = document.createElement('b');
        tovar.innerHTML = ('Товар из расчёта');
        let tovar_main = document.createElement('p');
        tovar_main.append(tovar);
        tovar_main.setAttribute('id', 'output_text_three')


        let output_product = document.createElement('div');
        output_product.setAttribute('id', 'output_product');

        let output_img = document.createElement('img');
        output_img.setAttribute('id', 'output_img');
        // output_product.append(output_img);

        let output_product_name = document.createElement('div');
        output_product_name.setAttribute('id', 'output_product_name');
        output_product.append(output_product_name);

        let output_img_name = document.createElement('p');
        output_img_name.innerHTML = (group_name);
        output_img_name.setAttribute('id', 'output_img_name');
        output_product_name.append(output_img_name);

        let output_img_href = document.createElement('a');
        output_img_href.setAttribute('id', 'output_img_href');
        output_img_href.setAttribute('href', url);
        output_img_href.innerHTML = (name);
        output_product_name.append(output_img_href);

        let output_img_line = document.createElement('div');
        output_img_line.setAttribute('id', 'output_img_line');
        output_product_name.append(output_img_line);

        let btn = document.createElement('a');
        btn.setAttribute('id', 'btn');
        btn.innerHTML = ('Купить');
        btn.setAttribute('href', url);
        output_product.append(btn);

        
        container.setAttribute('id', 'output');
        container.append(output_zag);
        container.append(output_text_one);
        container.append(output_text_two);
        container.append(output_text_three);
        container.append(tovar_main);
        container.append(output_product);
        container.setAttribute('new', 'true');

        try{
            let end = document.getElementById('output');
            end.replaceWith(container);
        }

        catch(e){
            let start = document.getElementById('all');
            start.append(container);
        }

    }
    output();
}

function del(){
    var sel = document.getElementById('second');
    var opts = sel.options;
    while(opts.length > 0){
    opts[opts.length-1] = null;
    }
}

function append(a){
    var sel = document.getElementById('second');
    for(let i = 0; i<a.length; i++){
        let option = new Option(a[i][0], a[i][1]);
        sel.append(option);
        option.setAttribute('price', a[i][2]);
        option.setAttribute('weight', a[i][3]);
        option.setAttribute('rashod', a[i][4]);
        option.setAttribute('url', a[i][5]);
    }
}

document.getElementById('first').addEventListener('change', function() {
    const n = this.value;
switch(n){
    case '1':
        del();
        append(one);
        break;
    case '2':
        del();
        append(two);
        break;
    case '3':
        del();
        append(three);
        break;
    case '4':
        del();
        append(four);
        break;
    case '5':
        del();
        append(five);
        break;
    case '6':
        del();
        append(six);
        break;
    case '7':
        del();
        append(seven);
        break;
    case '8':
        del();
        append(eight);
        break;
    case '9':
        del();
        append(nine);
        break;
    case '10':
        del();
        append(ten);
        break;
    case '11':
        del();
        append(eleven);
        break;
    case '12':
        del();
        append(twelwe);
        break;
    case '13':
        del();
        append(threeteen);
        break;
    case '14':
        del();
        append(fourteen);
        break;
    case '15':
        del();
        append(fiveteen);
        break;
    case '16':
        del();
        append(sixteen);
        break;
    case '17':
        del();
        append(seventeen);
        break;
    case '18':
        del();
        append(eighteen);
        break;
    case '19':
        del();
        append(nineteen);
        break;
    case '20':
        del();
        append(twenty);
        break;
    case '21':
        del();
        append(twentyone);
        break;
}})

var b = document.getElementById('second');
for(let i = 0; i < one.length; i++){
    let option = new Option(one[i][0], one[i][1]);
        b.append(option);
        option.setAttribute('price', one[i][2]);
        option.setAttribute('weight', one[i][3]);
        option.setAttribute('rashod', one[i][4]);
        option.setAttribute('url', one[i][5]);
}