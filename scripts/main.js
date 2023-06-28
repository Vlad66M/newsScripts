class Item{
    constructor(head, content, tags, date){
        this.head = head;
        this.content = content;
        this.tags = tags;
        this.date = new Date(date);
    }

    print(){
        let text = '';
        text = `<h2 style="font-family: Arial, Helvetica, sans-serif;">${this.head}</h2>\n`;
            
        let date_2 = new Date();
        let difference = this.date.getTime() - date_2.getTime();
        let TotalDays = Math.abs(Math.ceil(difference / (1000 * 3600 * 24)));
        let dateMsg = '';
        if(TotalDays==0){
            dateMsg = 'today';
        }
        if(TotalDays<=7 && TotalDays>0){
            dateMsg = TotalDays + ' days ago';
        }
        if(TotalDays>7){
            let d= this.date.getDate();
            let m = this.date.getMonth()+1;
            let y = this.date.getFullYear();
            let day = ''+d;
            let month = ''+m;
            if(d<10){
                day='0'+d;
            }
            if(m<10){
                month='0'+m;
            }
            dateMsg = day+'.'+month+'.'+y;
            //dateMsg=this.date.getDate()+'.'+(this.date.getMonth()+1) + '.'+this.date.getFullYear();
        }

        text += `<h3 style="font-weight: normal; font-size: 12px; font-family: Arial, Helvetica, sans-serif;">${dateMsg}</h3>\n`;

        text+=`<p style="font-family: Arial, Helvetica, sans-serif;">${this.content}</p>\n`;

        text+='<div style="display: flex;" >';
        
        for (const t of this.tags) {
            //let currentTag = '#'+t;
            text+=`<p style="margin:3px; color: blue; text-decoration: underline;">#${t}</p>\n`
        }
        text+='</div>';
        
        
        document.write(text);
    }

}

var cont = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo possimus doloremque incidunt atque animi placeat provident ipsa facilis quibusdam tenetur inventore architecto error nisi, enim doloribus eos. Dolore, quam corrupti.';

var itm = new Item('Head', cont, ['tag1', 'tag2', 'tag3'], '06/20/2023');
//itm.print();

var obj = {
    news: [
        new Item('Head1', cont, ['tag1', 'tag2', 'tag3'], '06/28/2023'),
        new Item('Head2', cont, ['tag1', 'tag2', 'tag3'], '06/27/2023'),
        new Item('Head3', cont, ['tag1', 'tag2', 'tag3'], '06/28/2023'),
        new Item('Head4', cont, ['tag1', 'tag2', 'tag3'], '06/25/2023'),
        new Item('Head5', cont, ['tag1', 'tag2', 'tag3'], '05/20/2023'),
        new Item('Head6', cont, ['tag1', 'tag2', 'tag3'], '05/1/2023')
    ],
    fullPrint: function(){
        for (const piece of this.news) {
            piece.print();
            document.write('<hr>');
        }
    },
    delItem:function(index){
        this.news.splice(index,1);
    },
    search:function(headText){
        let index=-1;
        
        for (const p of this.news) {
            index++;
            if(p.head==headText){
                return index;
                break;
            }
        }

        return index;
    }
}

obj.delItem(1);
obj.fullPrint();
var searchIndex = obj.search('Head4');
alert('Номер новости с заголовком Head4: '+searchIndex);
