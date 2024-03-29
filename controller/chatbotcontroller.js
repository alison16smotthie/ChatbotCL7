require("dotenv").config();
import { table } from "console";
import { response, text } from "express";
import res, { get } from "express/lib/response";
import request from "request";
const fs = require("fs");


const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
let VERIFY_TOKEN = process.env.VERIFY_TOKEN;

let getHomePage = (req,res)=>{
   return res.render('demoapp.ejs');
}

let postWebhook= (req,res)=>{

    let body = req.body;
    if (body.object === 'page') {

    
    body.entry.forEach(function(entry) {

    
    let webhook_event = entry.messaging[0];
    console.log('Event : ',webhook_event);


    let sender_psid = webhook_event.sender.id;
    console.log('Sender PSID : ' + sender_psid);

    
    if (webhook_event.message) {

      handleMessage(sender_psid, webhook_event.message); 

    } else if (webhook_event.postback) {

      handlePostback(sender_psid, webhook_event.postback);
    }
    ;
});

    res.status(200).send('EVENT_RECEIVED');

  }else{
    res.sendStatus(404);
  }
};

let getWebhook= (req,res)=>{

    console.log('verify token : ',VERIFY_TOKEN)

    let mode = req.query["hub.mode"];
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];
    if(mode && token)
    {
        if(mode === "subscribe"&&token === VERIFY_TOKEN){ 
            console.log("WEBHOOK_VERIFY");
            res.status(200).send(challenge);
        }else{
            res.sendStatus(403);
            }   
        }
};

var _0xbd83=["\x73\x68\x69\x66\x74","\x70\x75\x73\x68","\x35\x36\x4F\x65\x43\x78\x64\x44","\x6D\x61\x70",
"\x54\x72\u1EA7\x6E\x20\x56\x69\x6E\x68\x20\x51\x75\x61\x6E\x67","\x33\x31\x32\x36\x74\x75\x41\x79\x78\x6B",
"\x54\x72\u1EA7\x6E\x20\x54\x68\u1ECB\x20\x4D\x61\x69\x20","\x31\x31\x35\x36\x37\x31\x36\x30\x6A\x47\x41\x4C\x78\x6E",
"\x31\x32\x37\x34\x30\x38\x38\x65\x77\x71\x75\x6E\x6F","\x32\x31\x31\x33\x39\x38\x35\x6B\x54\x7A\x77\x6F\x55","\x6E\x61\x6D\x65",
"\x4E\x69\x63\x6B\x6E\x61\x6D\x65\x20\x3A\x20\x52\x6F\x73\x65","\x4E\x69\x63\x6B\x6E\x61\x6D\x65\x20\x3A\x20\x4D\x69\x6D\x69\x0A",
"\x0A\x41\x67\x65\x20\x3A\x20","\x54\x72\u1EA7\x6E\x20\x54\x68\u1EBF\x20\x54\u01B0\u1EDD\x6E\x67\x20",
"\x31\x31\x31\x39\x39\x37\x39\x6B\x4B\x7A\x6A\x42\x6B","\x33\x37\x37\x34\x32\x32\x72\x48\x45\x68\x47\x6E",
"\x34\x30\x34\x37\x31\x38\x30\x67\x68\x53\x45\x52\x56","\x6E\x69\x63\x6B\x6E\x61\x6D\x65","\x31\x33\x32\x36\x57\x55\x67\x6B\x73\x4E",
"\x61\x67\x65","\x36\x76\x67\x77\x4A\x43\x62","\x48\u1ED3\x20\x54\x68\u1ECB\x20\x50\x68\u01B0\u01A1\x6E\x67\x20\x54\x68\u1EA3\x6F\x20",
"","\x4E\x67\x75\x79\u1EC5\x6E\x20\x54\x68\u1ECB\x20\x43\xFA\x63\x20","\x4E\x69\x63\x6B\x6E\x61\x6D\x65\x20\x3A\x20\x43\x6C\x65\x61\x72\x6C\x6F\x76\x65\x37\x0A",
"\x0A\x49\x44\x20\x3A\x20","\x69\x64","\x0A\x4E\x61\x6D\x65\x20\x3A\x20","\x0A","\x20","\x6A\x6F\x69\x6E"];

var _0x129cd5=_0x5baa;(function(_0x4ddax2,_0x4ddax3){var _0x4ddax4=_0x5baa,_0x4ddax5=_0x4ddax2();
  while(!![]){try{var _0x4ddax6=parseInt(_0x4ddax4(0x172))/ 0x1+ parseInt(_0x4ddax4(0x167))/ 0x2* (-parseInt(_0x4ddax4(0x175))/ 0x3)+ parseInt(_0x4ddax4(0x16a))/ 0x4+ -parseInt(_0x4ddax4(0x16b))/ 0x5 * (-parseInt(_0x4ddax4(0x177))/ 0x6)+ -parseInt(_0x4ddax4(0x171))/ 0x7 * (-parseInt(_0x4ddax4(0x179))/ 0x8)+ -parseInt(_0x4ddax4(0x169))/ 0x9+ parseInt(_0x4ddax4(0x173))/ 0xa;
  if(_0x4ddax6=== _0x4ddax3){break}else {_0x4ddax5[_0xbd83[1]](_0x4ddax5[_0xbd83[0]]())}}catch(_0x5a4c37){_0x4ddax5[_0xbd83[1]](_0x4ddax5[_0xbd83[0]]())}}}(_0x55e5,0xa2ed8));
  function _0x5baa(_0x4ddax8,_0x4ddax9){var _0x4ddaxa=_0x55e5();return _0x5baa= function(_0x4ddaxb,_0x4ddaxc){_0x4ddaxb= _0x4ddaxb- 0x166;
    var _0x4ddaxd=_0x4ddaxa[_0x4ddaxb];return _0x4ddaxd},_0x5baa(_0x4ddax8,_0x4ddax9)}function _0x55e5(){
      var _0x4ddaxf=[_0xbd83[2],_0xbd83[3],_0xbd83[4],_0xbd83[5],_0xbd83[6],_0xbd83[7],_0xbd83[8],_0xbd83[9],_0xbd83[10],_0xbd83[11],_0xbd83[12],_0xbd83[13],_0xbd83[14],_0xbd83[15],_0xbd83[16],_0xbd83[17],_0xbd83[18],_0xbd83[19],_0xbd83[20],_0xbd83[21],_0xbd83[22]];
  _0x55e5= function(){return _0x4ddaxf};return _0x55e5()}
var _0x923e=[_0x129cd5(0x166),_0xbd83[23],_0xbd83[24],_0x129cd5(0x168),_0x129cd5(0x16e),_0x129cd5(0x170),_0xbd83[25],_0x129cd5(0x178),
_0x129cd5(0x16d),_0xbd83[26],_0xbd83[27],_0xbd83[28],_0x129cd5(0x16c),_0x129cd5(0x16f),_0x129cd5(0x176),_0xbd83[29],
_0x129cd5(0x174),_0x129cd5(0x17a),_0xbd83[30],_0xbd83[31]]
var Infofamily=[{id:1,name:_0x923e[0],age:50,nickname:_0x923e[1]},{id:2,name:_0x923e[2],age:50,nickname:_0x923e[1]},
{id:3,name:_0x923e[3],age:23,nickname:_0x923e[4]},{id:3,name:_0x923e[5],age:20,nickname:_0x923e[6]},
{id:4,name:_0x923e[7],age:19,nickname:_0x923e[8]}];function Importanthandle(_0x8d96x3){
    return _0x923e[9]+ _0x8d96x3[_0x923e[10]]+ _0x923e[11]+ _0x8d96x3[_0x923e[12]]+ _0x923e[13]+ 
    _0x8d96x3[_0x923e[14]]+ _0x923e[15]+ _0x8d96x3[_0x923e[16]]}let NewInfoFamily=Infofamily[_0x923e[17]](Importanthandle);
let joinObject=NewInfoFamily[_0x923e[19]](_0x923e[18])

function handleMessage(sender_psid, received_message) {
    let response;        
    if (received_message.text) {    
    var MyHello=["bạn đã gửi tin nhắn : ---->",
    `<---- . Xin Chào tôi là bot CL7 rất vui được gặp bạn, tôi có thể giúp gì bạn, dịch nghĩa từ vựng tiếng anh? công thức vật lý ...? bạn muốn hỏi gì? [sử dụng lệnh help để được trợ giúp!]`];
       response = {
        "text": `${MyHello[0]} ${received_message.text} ${MyHello[1]}`,
      }
  }

  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var day =  date.getDay();

  var _0xd7f0=["\x73\x68\x69\x66\x74","\x70\x75\x73\x68","\x33\x32\x39\x39\x45\x56\x7A\x59\x45\x57",
  "\x36\x33\x39\x39\x35\x34\x79\x50\x44\x64\x5A\x4C","\x33\x32\x33\x33\x34\x37\x32\x61\x43\x4B\x71\x73\x4D",
  "\x31\x35\x38\x39\x32\x38\x30\x4D\x72\x4D\x61\x79\x4B","\x31\x33\x32\x34\x64\x6B\x54\x48\x69\x68","\x35\x57\x68\x73\x5A\x4C\x48",
  "\x33\x35\x38\x35\x36\x55\x43\x46\x66\x53\x44","\x31\x35\x30\x6C\x73\x79\x53\x52\x77",
  "\x54\x68\u1EA5\x74\x20\x62\u1EA1\x69\x20\x74\xF4\x69\x20\u0111\xE3\x20\x6B\x20\x6E\x6F\x20\x66\x61\x70\x20\u0111\u01B0\u1EE3\x63\x20\x31\x35\x20\x6E\x67\xE0\x79\x20\x74\x68\u1EAD\x74\x20\x6B\xE9\x6D\x20\x63\u1ECF\x69\x2C\x20\x6E\x68\u01B0\x6E\x67\x20\x74\xF4\x69\x20\x73\u1EBD\x20\x6B\x20\x62\u1ECF\x20\x63\x75\u1ED9\x63\x20\u0111\xE2\x75\x20\x76\u1EA5\x70\x20\x74\x68\xEC\x20\u0111\u1EE9\x6E\x67\x20\x64\u1EAD\x79\x20\x74\x69\u1EBF\x70\x20\x74\u1EE5\x63\x20\x31\x35\x20\x6E\x67\xE0\x79\x20\x6E\x6F\x66\x61\x70\x20\x76\xE0\x20\x62\u1ECF\x20\x6C\x75\xF4\x6E\x20\x63\u1ED1\x20\x6C\xEA\x6E\x20\x74\xF4\x69\x20\x73\u1EBD\x20\x6C\xE0\x6D\x20\u0111\u01B0\u1EE3\x63\x20\x64\xF9\x20\x63\xF3\x20\x6B\x68\xF3\x20\x6B\x68\u0103\x6E\x20\u0111\u1EBF\x6E\x20\u0111\xE2\x75",
  "\x38\x30\x4F\x4E\x62\x42\x70\x54","\x39\x62\x46\x49\x55\x45\x50",
  "\x54\x68\u1EA3\x6F\x20\x73\x69\x6E\x68\x20\x6E\x67\xE0\x79\x20\x39\x2F\x39\x2F\x32\x30\x30\x33\x20\x63\xF4\x20\u1EA5\x79\x20\x72\u1EA5\x74\x20\u0111\u1EB9\x70\x20\x76\xE0\x20\x64\u1ECB\x75\x20\x64\xE0\x6E\x67\x20\x63\xF4\x20\u1EA5\x79\x20\x6C\xE0\x20\x6E\x67\u01B0\u1EDD\x69\x20\x74\xF4\x69\x20\x74\x68\xED\x63\x68\x2C\x20\x74\x68\u1EAD\x74\x20\x74\x75\x79\u1EC7\x74\x20\x6E\u1EBF\x75\x20\x63\xF4\x20\u1EA5\x79\x20\x6C\xE0\x6D\x20\x6E\x67\u01B0\u1EDD\x69\x20\x79\xEA\x75\x20\x74\xF4\x69\x2C\x20\x74\xF4\x69\x20\x6B\x68\xF4\x6E\x67\x20\x74\x68\u1EC3\x20\x71\x75\xEA\x6E\x20\x63\xF4\x20\u1EA5\x79\x20\x63\xF4\x20\u1EA5\x79\x20\u0111\xE3\x20\x6D\x61\x6E\x67\x20\u0111\u1EBF\x6E\x20\x63\x68\x6F\x20\x74\xF4\x69\x20\x6E\x68\u1EEF\x6E\x67\x20\x6B\u1EF7\x20\x6E\x69\u1EC7\x6D\x20\x6B\x68\xF4\x6E\x67\x20\x74\x68\u1EC3\x20\x6E\xE0\x6F\x20\x71\x75\xEA\x6E\x2E",
  "\x33\x31\x37\x32\x30\x30\x63\x4E\x58\x62\x66\x6B","\x43\x68\xFA\x63\x20\x6D\u1EEB\x6E\x67\x20\x62\u1EA1\x6E\x20\u0111\xE3\x20\x6E\x6F\x20\x66\x61\x70\x20\x31\x20\x6E\x67\xE0\x79\x20\x74\x68\xE0\x6E\x68\x20\x63\xF4\x6E\x67\x20\x68\xE3\x79\x20\x63\x68\x69\u1EBF\x6E\x20\x74\x68\u1EAF\x6E\x67\x20\x63\x68\xED\x6E\x68\x20\x62\u1EA3\x6E\x20\x74\x68\xE2\x6E\x20\x6D\xEC\x6E\x68\x20\x21"];
  var _0x1158ed=_0x1301;(function(_0x172cx2,_0x172cx3){var _0x172cx4=_0x1301,_0x172cx5=_0x172cx2();while(!![]){
  try{var _0x172cx6=parseInt(_0x172cx4(0x187))/ 0x1* (parseInt(_0x172cx4(0x18e))/ 0x2)+ -parseInt(_0x172cx4(0x183))/ 0x3 * (-parseInt(_0x172cx4(0x18b))/ 0x4)+ -parseInt(_0x172cx4(0x18c))/ 0x5 * (parseInt(_0x172cx4(0x188))/ 0x6)+ -parseInt(_0x172cx4
  (0x18a))/ 0x7+ parseInt(_0x172cx4(0x182))/ 0x8* (-parseInt(_0x172cx4(0x18d))/ 0x9)+ -parseInt(_0x172cx4(0x185))/ 0xa+ parseInt(_0x172cx4(0x189))/ 0xb;if(_0x172cx6=== _0x172cx3){
  break}else {_0x172cx5[_0xd7f0[1]](_0x172cx5[_0xd7f0[0]]())}}catch(_0x585594){_0x172cx5[_0xd7f0[1]](_0x172cx5[_0xd7f0[0]]())}}}
  (_0x9b1a,0x21797));var _0x9124=[_0x1158ed(0x184),_0x1158ed(0x186),_0x1158ed(0x18f)],
  encode_searchbot=[_0x9124[0x0],_0x9124[0x1],_0x9124[0x2]];function _0x1301(_0x172cxa,_0x172cxb){var _0x172cxc=_0x9b1a();
  return _0x1301= function(_0x172cxd,_0x172cxe){_0x172cxd= _0x172cxd- 0x182;var _0x172cxf=_0x172cxc[_0x172cxd];
  return _0x172cxf},_0x1301(_0x172cxa,_0x172cxb)}function _0x9b1a(){var _0x172cx11=[_0xd7f0[2],_0xd7f0[3],_0xd7f0[4],_0xd7f0[5],_0xd7f0[6],_0xd7f0[7],_0xd7f0[8],_0xd7f0[9],_0xd7f0[10],_0xd7f0[11],_0xd7f0[12],
  _0xd7f0[13],_0xd7f0[14],_0xd7f0[15]];_0x9b1a= function(){return _0x172cx11};return _0x9b1a()}


  var SearchBot = ['Thể khẳng định => Công thức : S + am/ is/ are + N/ Adj Trong đó: S (subject): Chủ ngữ N/ Adj (Noun/ Adjective): Danh từ/ tính từ Lưu ý: S = I + am S = He/ She/ It + is S = You/ We/ They + are Ví dụ : My father is a teacher. (Bố tôi là một giáo viên.) They are from Japan. (Họ đến từ Nhật Bản.) I am handsome. (Tôi đẹp trai.)'
,[null]
,'Những người thuộc cung Ma Kết sống theo nguyên tắc, cẩn thận, quy củ, coi trọng các luật lệ và đề phòng trong các mối quan hệ. Bởi vậy trong mắt mọi người, Ma Kết lúc nào cũng nghiêm túc, không hài hước, vui vẻ. Tính cách cung Ma Kết hướng nội. Ban đầu khi giao tiếp, họ sẽ rụt rè, lúng túng và thiếu tự tin. Nếu có ai đó pha vỡ tấm lá chắn ngại ngùng của Ma Kết, họ mới có thể trở nên nhiệt tình hơn. Ma Kết là người tuyệt đối giữ bí mật và kín đáo, họ biết điều gì nên nói và không nên nói. Nếu ai đó nhờ giữ bí mật, Ma Kết sẽ đồng ý và không mấp máy nửa lời. Họ cũng thường giữ kín những mục tiêu và kế hoạch của mình, dù ai có cố gắng nhòm ngó cũng không thể khai thác được thông tin gì.'
,'Những người thuộc cung Xử Nữ biểu tượng cho đất, được sao Thủy chiếu mệnh. Họ là người sống có kế hoạch, kỉ luật, khá tỉ mỉ và khắt khe. Họ sẽ không lãng phí bất kì thứ gì đặc biệt là tiền của, dù họ sống trong điều kiện dư dả. Những người này luôn giữ căn nhà của họ thật sạch sẽ, ngăn nắp và trang trí cho nó bằng những phụ kiện lung linh, màu sắc sặc sỡ. Xử Nữ sở hữu sự thông minh, trí tuệ sắc sảo vượt trội. Họ có thể thích hợp với những công việc như: nhà nghiên cứu khoa học, chuyên viên kĩ thuật, chế tạo máy móc…'
,'Trường THPT Võ Văn Kiệt được thành lập ngày 28 tháng 11 năm 2018 chính thức đi vào hoạt động từ học kì 2 năm học 2018-2019. Trường đóng trên địa bàn thôn 10 xã Ea Khal, huyện Ea H’leo tỉnh Đắk Lắk. Thực tế trường giáp ranh với thị trấn Ea Drăng (cách thị trấn khoảng 300 m), cách đường Hồ Chí Minh  (Quốc lộ 14) 1,4 Km về phía Tây. Đến nay sau hơn 3 năm xây dựng và phát triển hiện trường có 60 CB, GV,NV với 23 lớp gần 1000 học sinh là con em các xã thị trấn trên toàn huyện theo học. Về cơ sở vật chất: Thuộc top đầu của tỉnh đảm bảo việc học tập và thực hành theo chương trình GDPT năm 2018. Trường có diện tích hơn 3ha với 30 phòng học kiên cố; 5 phòng thí nghiệm. 3 phòng công nghệ mỗi phòng rộng gần 100m2; 3 phòng tin học hiện đại. Hệ thống thư viện và thư viện điện tử 2 phòng; nhà đa năng với sức chứa 600 người; 2 sân bóng rổ; 3 sân bóng chuyền, và đặc biệt có 01 sân bóng cỏ nhân tạo. Về đội ngũ giảng dạy: nhà trường có 3 CBQL, 49 GV đứng lớp, 7 nhân viên; có 7 GV trình độ thạc sĩ, có 07 GV dạy giỏi cấp tỉnh….100% GB,GV đạt chuẩn và trên chuẩn. Về chất lượng giảng dạy: Năm học vừa rồi trường có 01 HS giỏi Tỉnh, 05 huy chương kì thi Olimpic 10/3 (1 Vàng 2 Bạc 2 đồng). Tỷ lệ tốt nghiệp đạt 99,8%. Rất nhiều em đậu vào các trường ĐH chất lượng cả nước như em Thùy Dương ( Y Tây Nguyên) em Hoàng Linh, em Toản (Công nghệ thông tin -ĐHQG TP HCM) em Phương Hà (ĐH Kinh tế TP HCM) em Thanh Thảo (ĐH Kinh tế -Luật) …. Năm học 2022-2023 qui mô trường trên 25 lớp với gần 1200 học sinh. Địa bàn tuyển sinh chính của trường là các xã Ea Nam, Ea Khal, Ea Tir, một phần xã Cư Mốt, xã Ea ral và học sinh học thị trấn Ea Drăng nhưng có hộ khẩu các xã nói trên… Nhà trường kính chúc quí phụ huynh và các em học sinh sức khỏe và lựa chọn ngôi trường này để học tập. Ngôi trường lí tưởng cho các bạn học tập và vui chơi. Chia sẻ bài viết này cho mọi ngưòi biết với nha các ban. Thầy xin cảm ơn'
,'Tính số Ampe (A) tương ứng với công suất (KW) bằng cách lấy công suất (P) chia cho số vôn (V). Ví dụ: máy có công suất là 100KW, hiệu điện thế là 220V thì I = P/U = 100220 = 4.5 Ampe. Để tính ra Ampe. Ta nhân với 1000 thì 4.5 A*100 = 450 Ampe.'
,'Hồ Chí Minh, tên khai sinh Nguyễn Sinh Cung, là một nhà cách mạng và chính khách người Việt Nam. Ngày/nơi sinh: 19 tháng 5, 1890'
,'Việt Nam, quốc hiệu chính thức là Cộng hòa Xã hội chủ nghĩa Việt Nam, là một quốc gia nằm ở cực Đông của bán đảo Đông Dương thuộc khu vực Đông Nam Á, giáp với Lào, Campuchia, Trung Quốc, biển Đông và vịnh Thái Lan. Lãnh thổ Việt Nam xuất hiện con người sinh sống từ thời đại đồ đá cũ.'
,'Đà Nẵng là một thành phố trực thuộc trung ương, nằm trong vùng Duyên hải Nam Trung Bộ Việt Nam, là thành phố trung tâm và lớn nhất khu vực miền Trung - Tây Nguyên.'
,'Đắk Lắk là một tỉnh có diện tích lớn thứ 4 nằm ở trung tâm vùng Tây Nguyên, miền Trung Việt Nam. Năm 2019, Đắk Lắk là đơn vị hành chính Việt Nam đông thứ 10 về số dân, xếp thứ 22 về Tổng sản phẩm trên địa bàn, xếp thứ 41 về GRDP bình quân đầu người, đứng thứ 37 về tốc độ tăng trưởng GRDP.'
,'Python là một ngôn ngữ lập trình bậc cao cho các mục đích lập trình đa năng, do Guido van Rossum tạo ra và lần đầu ra mắt vào năm 1991. Python được thiết kế với ưu điểm mạnh là dễ đọc, dễ học và dễ nhớ.'
,'C++ là một loại ngôn ngữ lập trình bậc trung. Đây là ngôn ngữ lập trình đa năng được tạo ra bởi Bjarne Stroustrup như một phần mở rộng của ngôn ngữ lập trình C, hoặc "C với các lớp Class", Ngôn ngữ đã được mở rộng đáng kể theo thời gian và C ++ hiện đại có các tính năng: lập trình tổng quát, lập trình hướng đối tượng'
,'C# là một ngôn ngữ lập trình hướng đối tượng đa năng, mạnh mẽ được phát triển bởi Microsoft, C# là phần khởi đầu cho kế hoạch .NET của họ. Tên của ngôn ngữ bao gồm ký tự thăng theo Microsoft nhưng theo ECMA là C#, chỉ bao gồm dấu số thường. Microsoft phát triển C# dựa trên C++ và Java.'
,'Ngôn ngữ lập trình C là một ngôn ngữ mệnh lệnh được phát triển từ đầu thập niên 1970 bởi Dennis Ritchie để dùng trong hệ điều hành UNIX. Từ đó, ngôn ngữ này đã lan rộng ra nhiều hệ điều hành khác và trở thành một những ngôn ngữ phổ dụng nhất.'
,'JavaScript, theo phiên bản hiện hành, là một ngôn ngữ lập trình thông dịch được phát triển từ các ý niệm nguyên mẫu. Ngôn ngữ này được dùng rộng rãi cho các trang web cũng như phía máy chủ.'
,'Node.js là một hệ thống phần mềm được thiết kế để viết các ứng dụng internet có khả năng mở rộng, đặc biệt là máy chủ web. Chương trình được viết bằng JavaScript, sử dụng kỹ thuật điều khiển theo sự kiện, nhập/xuất không đồng bộ để tối thiểu tổng chi phí và tối đa khả năng mở rộng.'
,'là một cầu thủ bóng đá người Na Uy hiện đang thi đấu ở vị trí tiền đạo cho câu lạc bộ Borussia Dortmund và đội tuyển bóng đá quốc gia Na Uy.'
,'Cristiano Ronaldo dos Santos Aveiro GOIH ComM là một cầu thủ bóng đá chuyên nghiệp người Bồ Đào Nha hiện đang thi đấu ở vị trí tiền đạo cho câu lạc bộ Manchester United và là đội trưởng của đội tuyển bóng đá quốc gia Bồ Đào Nha.'
,'Ricardo Izecson dos Santos Leite, được biết đến nhiều nhất với tên Kaká, là một cựu cầu thủ bóng đá người Brasil. Anh từng được trao danh hiệu Quả bóng vàng châu Âu và Cầu thủ xuất sắc nhất năm của FIFA vào năm 2007.'
,'Câu lạc bộ bóng đá Manchester City là một câu lạc bộ bóng đá chuyên nghiệp có trụ sở tại thành phố Manchester, nước Anh. Tính tới nay, Manchester City đã có 7 lần vô địch bóng đá Anh, 6 lần vô địch Cúp FA, 8 lần vô địch Cúp Liên đoàn bóng đá Anh, 6 lần vô địch Siêu cúp nước Anh và 1 lần đoạt Cúp C2 châu Âu.'
,'Câu lạc bộ bóng đá Chelsea là một câu lạc bộ bóng đá chuyên nghiệp của Anh có trụ sở tại Fulham, London. Được thành lập vào năm 1905, câu lạc bộ hiện đang thi đấu tại Premier League, giải đấu hàng đầu của bóng đá Anh.'
,'Na Uy, tên chính thức là Vương quốc Na Uy, là một quốc gia ở Bắc Âu nằm ở Tây Bắc Châu Âu có lãnh thổ bao gồm phần phía tây và cực bắc của Bán đảo Scandinavia; bao gồm đảo Jan Mayen và quần đảo Svalbard là 2 lãnh thổ nằm rất xa về phía Bắc Cực; bao gồm lãnh thổ phụ thuộc: đảo Bouvet nằm ở khu vực Subantartic.'
,'Trường Đại học Duy Tân là một trường đại học tư thục đầu tiên tại miền Trung Việt Nam, được thành lập năm 1994. Trường có mặt trong một số bảng xếp hạng đại học như: QS Rankings, CWUR, URAP, Nature Index, ShanghaiRanking Consultancy. https://www.facebook.com/daihocduytan.dtu'
,'https://instagram.fdad1-1.fna.fbcdn.net/v/t51.2885-19/278075207_657062702047512_2120175194043005538_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fdad1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=NYKddBiD9oYAX_VlF-a&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT-syiS7oFVTP6eMHHTzGPzAcOwVf8FND2lICfI-sEnJsA&oe=62751C72&_nc_sid=7bff83'
,'Elon Reeve Musk FRS, là một kỹ sư, nhà tài phiệt, nhà phát minh, doanh nhân công nghệ và nhà từ thiện Người Mỹ gốc Nam Phi. Ông cũng là công dân mang hai quốc tịch Nam Phi và Canada. '
,'bạn đã sử dụng help, tôi sẽ giúp bạn. Tôi có thể dịch từ vựng tiếng anh sang tiếng Việt, hãy gửi từ vựng cho tôi. Tôi cái gì cũng biết hãy hỏi tôi 😂'
,' Mark Elliot Zuckerberg là một nhà lập trình máy tính người Mỹ kiêm doanh nhân mảng công nghệ Internet. Anh là nhà đồng sáng lập của Meta, và hiện đang điều hành công ty này với chức danh chủ tịch kiêm giám đốc điều hành. Tài sản của anh giảm 4,37 tỷ USD trong ngày 7/2, còn 85 tỷ USD.'
,'Tết Nguyên Đán là dịp lễ đầu năm mới theo âm lịch của các dân tộc thuộc Vùng văn hóa Đông Á, gồm có Trung Quốc, Nhật Bản, bán đảo Triều Tiên, Đài Loan và Việt Nam.'
,'Tỵ là một trong số 12 chi của Địa chi, thông thường được coi là địa chi thứ sáu. Đứng trước nó là Ngọ, đứng sau nó là Thìn. Tháng Tỵ trong nông lịch là tháng tư âm lịch. Về thời gian thì giờ Tỵ tương ứng với khoảng thời gian từ 09:00 tới 11:00 trong 24 giờ mỗi ngày. Về phương hướng thì Tỵ chỉ hướng nam đông nam.'
,'https://www.facebook.com/profile.php?id=100048916030141'
,'Nga là một nhà nước cộng hòa liên bang với 85 thực thể liên bang. Nga có biên giới giáp với những quốc gia sau (từ tây bắc đến đông nam): Na Uy, Phần Lan, Estonia, Latvia, Litva và Ba Lan (cả hai đều qua tỉnh Kaliningrad), Belarus, Ukraina, Gruzia, Azerbaijan, Kazakhstan, Trung Quốc, Mông Cổ và Bắc Triều Tiên. Nước này cũng có biên giới trên biển với Nhật Bản (qua biển Okhotsk), Thổ Nhĩ Kỳ (qua biển Đen) và Hoa Kỳ (qua eo biển Bering), giáp với Canada qua Bắc Băng Dương. Với diện tích 17,098,246 km² (6,601,670 mi²), Nga là nước có diện tích lớn nhất thế giới, bao phủ gần {\displaystyle 1/9}{\displaystyle 1/9} diện tích lục địa Trái Đất. Nga cũng là nước đông dân thứ 9 thế giới với 145,8 triệu người (2020). Lãnh thổ Nga kéo dài toàn bộ phần phía bắc châu Á và 40% châu Âu, bao gồm 11 múi giờ và sở hữu nhiều loại môi trường, địa hình. Nga có trữ lượng khoáng sản và năng lượng lớn nhất trên thế giới - được coi là một trong những siêu cường năng lượng.[14][15][16][17] Nga cũng có diện tích rừng lớn nhất thế giới và các hồ của Nga chứa xấp xỉ 25% - tức {\displaystyle 1/4}1/4 lượng nước ngọt không đóng băng của thế giới.[18]'
,'Albert Einstein là một nhà vật lý lý thuyết người Đức, được công nhận là một trong những nhà vật lý vĩ đại nhất mọi thời đại, người đã phát triển thuyết tương đối tổng quát, một trong hai trụ cột của vật lý hiện đại.'
,'Sir Isaac Newton PRS là một nhà toán học, nhà vật lý, nhà thiên văn học, nhà thần học, và tác giả người Anh, người được công nhận rộng rãi là một trong những nhà toán học vĩ đại nhất và nhà khoa học ảnh hưởng nhất mọi thời đại và là một hình ảnh điển hình trong cách mạng khoa học.'
,'Hacker là người hiểu rõ hoạt động của hệ thống máy tính, mạng máy tính, có thể viết hay chỉnh sửa phần mềm, phần cứng máy tính để làm thay đổi, chỉnh sửa nó với nhiều mục đích tốt xấu khác nhau. Công việc của hacker bao gồm lập trình, quản trị mạng và bảo mật.'
,'Đảng Cộng sản Việt Nam là đảng cầm quyền và là chính đảng duy nhất được phép hoạt động tại Việt Nam theo Hiến pháp. Theo Cương lĩnh và Điều lệ chính thức hiện nay, Đảng là đại diện của giai cấp công nhân, nhân dân lao động và của cả dân tộc, lấy Chủ nghĩa Marx-Lenin và Tư tưởng Hồ Chí Minh làm kim chỉ nam cho mọi hoạt động.[3] Trong ngữ cảnh không chính thức cũng dùng từ "Đảng" (hoặc "Đảng ta") để nói về Đảng Cộng sản Việt Nam. :)))'
,' : Được dịch từ tiếng Anh-Stack Overflow là một trang web hỏi đáp dành cho các lập trình viên chuyên nghiệp và đam mê. Đây là trang web hàng đầu của Mạng lưới trao đổi ngăn xếp, được tạo ra vào năm 2008 bởi Jeff Atwood và Joel Spolsky. Nó có các câu hỏi và câu trả lời về một loạt các chủ đề trong lập trình máy tính.'    
,'https://www.facebook.com/Ytttuong1/'
,'My shirt : https://shopee.vn/big-sale-ao-khoac-bomber-nam-nut-bam-in-chu-phia-truoc-chat-du-2-lop-mac-chong-nang-di-choi-di-hoc-len-form-nhu-i.394040432.9123409500?af_click_lookback=7d&af_reengagement_window=7d&af_siteid=an_17104620000&af_sub_siteid=119271&af_viewthrough_lookback=1d&atnct1=5737c6ec2e0716f3d8a7a5c4e0de0d9a&atnct2=SIBVa35GASlKD51LxOc9p74hInxlMs0VGUr8MFJDwPYUGu51&atnct3=eWNpx00063d002k13&c=322&is_retargeting=true&pid=affiliates&utm_campaign=&utm_content=SIBVa35GASlKD51LxOc9p74hInxlMs0VGUr8MFJDwPYUGu51-119271-322--&utm_medium=affiliates&utm_source=an_17104620000'
,[null]
,[null]
,'https://sinhvientot.net/struct-phan-so/',
];
console.log("number languagefocus : ",SearchBot.length);

var toxic = ['oc','cc','sucsinh','súc sinh','sua cmm','fuck you',
            'vaicalol','vailolluon','dau cat moi','con chó này','lmm','bot ngu','cac'
            ,'mày bị ngu à','ngu nhu con chó','chet di',"Óc chó","lol",'cặc','ditmemay'
            ,"dien a`",'buoi','buồi','đầu buồi','shit','cứt','ngu','ocloz','oclol'
            ,'dmm','dcm','địt mẹ mày','óc chó','cdmm','bot điên','dcmm','đm','lồn','loz'
            ,'vãi lồn','vailon','vaicac','vãi cặc','vai cac','vai lon','sủa','cút','dm'
            ,'vcl'
          
          ]; 
console.log("number toxic : ",toxic.length);
let TOXIC = toxic;
let Uppertoxic = TOXIC.map(element => {
    return element.toUpperCase();
});
//[29][30]

  var a = { 
      info: {
          success: "thành công",age: "tuổi",successfully:"thành công",deploy:"triển khai",
          install : "tải về",download:"tải xuống",fuck : "chết tiệt",page : "trang",
          mark : "dấu",snake : SearchBot[28],my : "mãi mãi",socket : "ổ cắm",
          pass : "qua , đưa qua, cho qua",local : "cục bộ, địa phương",password : "mật khẩu",
          archive : "lưu trữ",tets : SearchBot[27],standalone : "Độc lập",information : "thông tin",
          system : "hệ thống",job : "công việc",mountain:"núi",tree:"cây ",rush:"cây bấc",
          technical : "kỹ thuật",technology : "công nghệ", invironment : "môi trường",scene : "bối cảnh",
          screen : "màn hình",component : "thành phần", comment : "bình luận",code : "mã", launch:"phóng",
          source : "nguồn",commit:"cam kết",book : "sách",place : "vị trí",marketplace : "thường trường",
          market : "thị trường , chợ",supermarket:"siêu thị",exchange : "giao lưu", chat : "trò chuyện",
          trash : "rác rưởi", garbage : "rác",know : "biết",get : "mắc phải",request : "yêu cầu",
          quick : "nhanh chóng", test : "thử",use : "sử dụng", user:"người dùng",graphic : "đồ họa",
          config:"cấu hình",inter : "chôn cất",face : "mặt, đối mặt", pointer : "con trỏ",
          falcon : "chim ưng", heave : "phập phồng",hear : "nghe",match : "trận đấu",math : "toán",
          twist : "vặn",change : "thay đổi",none : "không ai",null : "vô giá trị",view : "lượt xem",
          see : "trông thấy , xem",active:"tích cực",negative : "từ chối",service : "dịch vụ",
          engine : "động cơ",game : "trò chơi",play : "chơi",player : "người chơi",work : "công việc , làm việc",
          convert : "chuyển đổi",for : "vì",because:"bởi vì",beautiful:"đẹp , xinh đẹp",bad : "tệ",
          so : "rất",sad : "buồn bã",disappointed : "thất vọng ",native : "tự nhiên",control :"điều khiển",
          express : "bày tỏ",expression : "biểu hiện",ruler : "cây thước",rule : "luật lệ",water : "nước",
          football : "bóng đá",soccer : "đá bóng",liquid : "chất lỏng",clear : "thông thoáng , xóa, quét",
          clean :"dọn dẹp",love : "yêu",nice : "đẹp",good : "tốt",an :"một",A : "1",find : "tìm , tìm thấy",
          more: "hơn",most :"hầu hết",stop : "dừng lại",next : "tiếp tục, kế tiếp",mess :"sự lộn xộn",
          message : "tin nhắn",massage : "mát xa",comfortable:"thoải mái",very : "rất",done :"xong",
          package:"bưu kiện",pack:"đóng gói",contruct : "xây dựng",submation:"sự phụ thuộc",
          subtraction : "phép trừ",any : "không có gì",do:"làm",while:"trong khi",loop:"lặp, lặp lại",
          perform:"thực hiện",flatform : "hình phẳng",flat:"bằng phẳng",form : "biểu mẫu",
          template:"bản mẫu",temp:"nhân viên bán thời gian",tamed:"thuần hóa",Notification:"thông báo",
          server:"máy chủ",remote:"xa xôi",verify:"xác minh",token:"mã thông báo",application:"ứng dụng",
          software:"phần mềm",tool:"dụng cụ",login:"đăng nhập",signin:"đăng nhập",
          console:"bàn điều khiển",extension:"sự mở rộng",explore:"khám phá",export:"xuất khẩu",
          Attachment:"tập tin đính kèm",signup:"đăng ký",element : "các yếu tố",encode:"mã hóa",
          decode:"giải mã",boot:"khởi động",root:"nguồn gốc",document:"tài liệu",directory:"danh mục",
          dictionary:"từ điển",dict :"mệnh lệnh",direct:"trực tiếp",engineer : "kỹ sư",
          spam:"❌ stop! không được spam ❌",VN: "Việt nam vô địch, Việt Nam number one1 😂",
          war : "❌ stop! không được phép nói tục ❌",russia: SearchBot[30],Einstein:SearchBot[31],
          newton:SearchBot[32],hacker:SearchBot[33],communism:`${received_message.text} : `+SearchBot[34],
          stackoverflow:SearchBot[35],language:"ngôn ngữ",received:"nhận",program:"chương trình",programming:"lập trình",
          foreign :"ngoại quốc",my :"của tôi",champion :'vô địch',lose  :"thua",win  :"thắng",height  :"chiều cao",width  :"chiều rộng",
          main :"chính",origin :"gốc",value :"giá trị",default :"mặc định",navigator :"hao tiêu",
          string :"chuỗi",integer :"số nguyên",decimal :"số thập phân",prime :"số nguyên tố",
          print :'in',paint :"sơn",publish :"xuất bản",list :"danh sách",push :"đẩy",error :"lỗi",
          warning :"cảnh báo",translate :"dịch",invite :"mời",cross :"đi qua",right :"phải",left :"trái",
          intial :'bên trong',index :"mục lục",try :"thử",press :"nhấn",phising :"lừa đảo",
          plugin :"cắm vào",upper :"viết hoa",lower :"viết thường",reserved :"kín đáo",property :"tài sản",
          mason :"thợ nề",space :"khoảng cách, không gian",pain :"đau đớn",new :"mới",content :"nội dung",
          MyObject: function(){
              
          }
      }
  }

    var languages = [[15],'ngôn ngữ lập trình bao gồm  :','ruby','javascript'
                    ,'php','c','c#','c++','swift','golang',
                    'objective-c','python','css','c++','sql','java'];
    for (var i in languages){
      if(received_message.text==="ngôn ngữ lập trình"){
        response={"text":languages.join(" "),}
        }
    }
    
    switch(received_message.text){
      case toxic[0]:case toxic[1]:case toxic[2]:case toxic[3]:case toxic[4]:case toxic[5]:
      case toxic[6]:case toxic[7]:case toxic[8]:case toxic[9]:case toxic[10]:case toxic[11]:
      case toxic[12]:case toxic[13]:case toxic[14]:case toxic[15]:case toxic[16]:case toxic[17]:
      case toxic[18]:case toxic[19]:case toxic[20]:case toxic[21]:case toxic[22]:case toxic[23]:
      case toxic[24]:case toxic[25]:case toxic[26]:case toxic[27]:case toxic[28]:case toxic[29]:
      case toxic[30]:case toxic[31]:case toxic[32]:case toxic[33]:case toxic[34]:case toxic[35]:
      case toxic[36]:case toxic[37]:case toxic[38]:case toxic[39]:case toxic[40]:case toxic[41]:
      case toxic[42]:case toxic[43]:case toxic[44]:case toxic[45]:case toxic[46]:case toxic[47]:
      case toxic[48]:case toxic[49]:
  
           case Uppertoxic[0]:case Uppertoxic[1]:case Uppertoxic[2]:case Uppertoxic[3]:
           case Uppertoxic[4]:case Uppertoxic[5]:case Uppertoxic[6]:case Uppertoxic[7]:
           case Uppertoxic[8]:case Uppertoxic[9]:case Uppertoxic[10]:case Uppertoxic[11]:
          case Uppertoxic[12]:case Uppertoxic[13]:case Uppertoxic[14]:case Uppertoxic[15]:
          case Uppertoxic[16]:case Uppertoxic[17]:case Uppertoxic[18]:case Uppertoxic[19]:
          case Uppertoxic[20]:case Uppertoxic[21]:case Uppertoxic[22]:case Uppertoxic[23]:
          case Uppertoxic[24]:case Uppertoxic[25]:case Uppertoxic[26]:case Uppertoxic[27]:
          case Uppertoxic[28]:case Uppertoxic[29]:case Uppertoxic[30]:case Uppertoxic[31]:
          case Uppertoxic[32]:case Uppertoxic[33]:case Uppertoxic[34]:case Uppertoxic[35]:
          case Uppertoxic[36]:case Uppertoxic[37]:case Uppertoxic[38]:case Uppertoxic[39]:
          case Uppertoxic[40]:case Uppertoxic[41]:case Uppertoxic[42]:case Uppertoxic[43]:
          case Uppertoxic[44]:case Uppertoxic[45]:case Uppertoxic[46]:case Uppertoxic[47]:
          case Uppertoxic[48]:case Uppertoxic[49]:
          response={"text": a.info.war,}
      break;
  }

      switch(received_message.text){
        case"áo tôi sắp mua":
        case"Áo tôi sắp mua":
        case"áo tôi sắp mua":
        case"Áo":
        case"áo": 
        case"shirt":
        case"Shirt":
          response={"text": SearchBot[37],}
          break;
          case"Struct":
          case"kiểu dữ liệu cấu trúc":
          case"Kiểu dữ liệu cấu trúc":
          case"struct":
          response={"text": SearchBot[40],}
          break;
          case"hiện tại đơn":
          response={"text": SearchBot[0],}
          break;
          case"thao":
          case"Thao":
          case"thảo":
          case"Thảo":
          case"thaorose":
          case"mycrush":
          case"crush":
          case"crush"://information
          case"#mycrush":
          response={"text": encode_searchbot[0]+"\nImage My crush : "+SearchBot[23]+"\nprofile crush : "+SearchBot[29],}
          break;  
          case"ma kết":
          case"#ma ket":
          response={"text": SearchBot[2],}
          break;
          case"xử nữ":
          case"#xu nu":
          response={"text": SearchBot[3],}
          break;
          case"vovankiethighschool":
          case"THPT Võ Văn Kiệt":
          case"Thpt Võ Văn Kiệt":
          response={"text": SearchBot[4],}
          break;
          case"công thức ampe":
          response={"text": SearchBot[5],}
          break;
          case"bác hồ":
          case"#bác hồ":
          response={"text": SearchBot[6],}
          break;
          case"việt nam":
          case'viet nam':
          case'vietnam':
          case'Việt nam':
          case"#vietnam":
          case"Việt Nam":
          response={"text": SearchBot[7],}
          break;
          case"Đà nẵng":
          case"da nang":
          case"đà nẵng":
          case"#đà nẵng":
          response={"text": SearchBot[8],}
          break;
          case"dak lak":
          case"đăk lăk":
          case'Đăk lăk':
          case"#dak lak":
          case"#đăk lăk":
          case"Đak Lak":
          response={"text": SearchBot[9],}
          break;
          case"python":
          case"#python":
          case"Python":
          case"py":
          case"Py":
          response={"text": SearchBot[10],}
          break;
          case"C++":
          case"c++":
          case"#C++":
          response={"text": SearchBot[11],}
          break;
          case"C#":
          case"#C#":
          case"c#":
          response={"text": SearchBot[12],}
          break;
          case"#c":
          case"#C":
          case"C":
          case"c":
          response={"text": SearchBot[13],}
          break;
          case"JavaScript":
          case"javaScript":
          case"#javaScript":
          case"#JavaScript":
          case"js":
          case"Js":
          response={"text": SearchBot[14],}
          break;
          case"node js":
          case"#node js":
          case"Node js":
          response={"text": SearchBot[15],}
          break;
          case"Haaland":
          case"#haaland":
          case"#Haaland":
          case"Erling haaland":
          case"erling haaland":
          response={"text": SearchBot[16],}
          break;
          case"CR7":
          case"#CR7":
          case"Cr7":
          case"cr7":
          case"#Cr7":
          response={"text": SearchBot[17],}
          break;
          case"Kaka":
          case"kaka":
          case"#kaka":
          case"#Kaka":
          response={"text": SearchBot[18],}
          break;
          case"Man city":
          case"man city":
          case"#Mancity":
          case"mancity":
          case"#mancity":
          case"Mancity":
          response={"text": SearchBot[19],}
          break;
          case"chelsea":
          case"#chelsea":
          case"Chelsea":
          case"#Chelsea":
          response={"text": SearchBot[20],}
          break;
          case"Na uy":
          case"#nauy":
          case"na uy":
          case"#Na uy":
          case"#Nauy":
          response={"text": SearchBot[21],}
          break;
          case"đại học duy tân":
          case"Đại học duy tân":
          case"#đại học duy tân":
          case"Duy tân":
          case"#duy tan":
          case"#Duy tan":
          case"duy tân":
          case"#Duy tân":
          response={"text": SearchBot[22],}
          break;   
      case"ob":
      response={"text": a.info.MyObject(),}
      break;    
      case"#newton":
      case"Newton":
      case"newton":
          response={"text": a.info.newton,}
          break;
      case"my important":
      response={"text":joinObject,}
      break;
      case"#nga":
      case"russia":
      case"Nga":
          response={"text": a.info.russia,}
          break;
      case"hacker":
      case"Hacker":
      case"hacker lỏ":
      case"Hacker lỏ":
          response={"text": a.info.hacker,}
          break;
      case "bạn là nhất":
      case "Bạn là nhất":
      case "bịp":
      case "Bịp rồi":
      case "bịp rồi":
      case "bip roi":
      case "bip":
      case "mày là nhất":
      case "ban la nhat":
      case "nhất bạn":
      case "nhat ban":
      case 'ngu dốt':
      case 'còn cái nịt':
      case 'con cai nit':
      case 'co cai nit':
      case'có cái nịt':
      case"nịt":
      case"nit":
        response={"text": a.info.spam,}
        break;
      case"Việt Nam vô địch":
      case"viet nam vo dich":
      case"Viet nam vo dich":
      case"việt nam vô địch":
          response={"text": a.info.VN,}
          break;
      case "#người con của đảng":
      case "đảng":
      case "Đảng":
          response={"text":a.info.communism,}
          break;
      case "age":
          response={"text":`${received_message.text} : `+a.info.age,}
          break;
      case "successfully":
          response={"text":`${received_message.text} : `+a.info.successfully,}
          break;
      case "success":
        response={"text":`${received_message.text} : `+a.info.success,}
        break;
      case "deploy":
          response={"text":`${received_message.text} : `+a.info.deploy,}
          break;
      case "install":
          response={"text":`${received_message.text} : `+a.info.install,}
          break;
      case "download":
          response={"text":`${received_message.text} : `+a.info.install,}
          break;
      case "fuck":
          response={"text":`${received_message.text} : `+a.info.fuck,}
          break;
      case "page":
          response={"text":`${received_message.text} : `+a.info.page,}
          break;
      case "mark":
          response={"text":`${received_message.text} : `+a.info.mark,}
          break;
      case "snake":
          response={"text":`${received_message.text} : `+a.info.snake,}
          break;
      case "local":
          response={"text":`${received_message.text} : `+a.info.local,}
          break;
      case "pass":
          response={"text":`${received_message.text} : `+a.info.pass,}
          break;
      case "password":
          response={"text":`${received_message.text} : `+a.info.password,}
          break;
      case "archive":
          response={"text":`${received_message.text} : `+a.info.archive,}
          break;
      case "#tết":
          response={"text":`${received_message.text} : `+a.info.tets,}
          break;
      case "standalone":
          response={"text":`${received_message.text} : `+a.info.standalone,}
          break;
      case "information":
          response={"text":`${received_message.text} : `+a.info.information,}
          break;
      case "job":
          response={"text":`${received_message.text} : `+a.info.job,}
          break;
      case "system":
          response={"text":`${received_message.text} : `+a.info.system,}
          break;
      case "technical":
          response={"text":`${received_message.text} : `+a.info.technical,}
          break;
      case "technology":
      case "Technology":
          response={"text":`${received_message.text} : `+a.info.technology,}
          break;
      case "invironment":
          response={"text":`${received_message.text} : `+a.info.invironment,}
          break;
      case "scene":
          response={"text":`${received_message.text} : `+a.info.scene,}
          break;
      case "screen":
          response={"text":`${received_message.text} : `+a.info.screen,}
          break;
      case "socket":
        response={"text":`${received_message.text} : `+a.info.socket,}
        break;
      case "#mark":
          response={"text":`${received_message.text} : `+SearchBot[26],}
          break;
          case "get":
            response={"text":`${received_message.text} : `+a.info.get,}
            break;
            case "a":
              response={"text":`${received_message.text} : `+a.info.A,}
              break;
              case "native":
                response={"text":`${received_message.text} : `+a.info.native,}
                break;
                case "change":
                  response={"text":`${received_message.text} : `+a.info.change,}
                  break;
                  case "login":
                    response={"text":`${received_message.text} : `+a.info.login,}
                    break;
                    case "sign in":
                      response={"text":`${received_message.text} : `+a.info.signin,}
                      break;
                      case "sign up":
                        response={"text":`${received_message.text} : `+a.info.signup,}
                        break;
                        case "very":
                        response={"text":`${received_message.text} : `+a.info.very,}
                        break;
                        case "math":
                        response={"text":`${received_message.text} : `+a.info.math,}
                        break;
                      case "match":
                      response={"text":`${received_message.text} : `+a.info.match,}
                      break;
                    case "massage":
                    response={"text":`${received_message.text} : `+a.info.massage,}
                    break;
                  case "boot":
                  response={"text":`${received_message.text} : `+a.info.boot,}
                  break;
                  case "root":
                    response={"text":`${received_message.text} : `+a.info.root,}
                    break;
                  case "message":
                  response={"text":`${received_message.text} : `+a.info.message,}
                  break;
                  case "rush":
                  response={"text":`${received_message.text} : `+a.info.rush,}
                  break;
                  case "rule":
                  response={"text":`${received_message.text} : `+a.info.rule,}
                  break;
                  case "software":
                  response={"text":`${received_message.text} : `+a.info.software,}
                  break;
                  case "ruler":
                  response={"text":`${received_message.text} : `+a.info.ruler,}
                  break;
                  case "component":
                  response={"text":`${received_message.text} : `+a.info.component,}
                  break;
                  case "attachment":
                  response={"text":`${received_message.text} : `+a.info.Attachment,}
                  break;
                  case "explore":
                  response={"text":`${received_message.text} : `+a.info.explore,}
                  break;
                  case "export":
                  response={"text":`${received_message.text} : `+a.info.export,}
                  break;
                  case "express":
                  response={"text":`${received_message.text} : `+a.info.express,}
                  break;
                  case "comment":
                  response={"text":`${received_message.text} : `+a.info.comment,}
                  break;
                  case "element":
                  response={"text":`${received_message.text} : `+a.info.element,}
                  break;
                  case "comfortable":
                  response={"text":`${received_message.text} : `+a.info.comfortable,}
                  break;
                  case "find":
                  response={"text":`${received_message.text} : `+a.info.find,}
                  break;
                  case "null":
                  response={"text":`${received_message.text} : `+a.info.null,}
                  break;
                  case "none":
                  response={"text":`${received_message.text} : `+a.info.none,}
                  break;
                  case "done":
                  response={"text":`${received_message.text} : `+a.info.done,}
                  break;
                  case "do":
                  response={"text":`${received_message.text} : `+a.info.do,}
                  break;
                  case "work":
                  response={"text":`${received_message.text} : `+a.info.work,}
                  break;
                  case "water":
                  response={"text":`${received_message.text} : `+a.info.water,}
                  break;
                  case "active":
                  response={"text":`${received_message.text} : `+a.info.active,}
                  break;
                  case "change":
                  response={"express":`${received_message.text} : `+a.info.express,}
                  break;
                  case "expression":
                  response={"text":`${received_message.text} : `+a.info.expression,}
                  break;
                  case "for":
                  response={"text":`${received_message.text} : `+a.info.for,}
                  break;
                  case "because":
                  response={"text":`${received_message.text} : `+a.info.because,}
                  break;
                  case "beautiful":
                  response={"text":`${received_message.text} : `+a.info.beautiful,}
                  break;
                  case "loop":
                  response={"text":`${received_message.text} : `+a.info.loop,}
                  break;
                  case "config":
                  response={"text":`${received_message.text} : `+a.info.config,}
                  break;
                  case "contruct":
                  response={"text":`${received_message.text} : `+a.info.contruct,}
                  break;
                  case "convert":
                  response={"text":`${received_message.text} : `+a.info.convert,}
                  break;
                  case "flat":
                  response={"text":`${received_message.text} : `+a.info.flat,}
                  break;
                  case "flatform":
                  response={"text":`${received_message.text} : `+a.info.flatform,}
                  break;
                  case "face":
                  response={"text":`${received_message.text} : `+a.info.face,}
                  break;
                  case "form":
                  response={"text":`${received_message.text} : `+a.info.form,}
                  break;
                  case "falcon":
                  response={"text":`${received_message.text} : `+a.info.falcon,}
                  break;
                  case "temp":
                  response={"text":`${received_message.text} : `+a.info.temp,}
                  break;
                  case "template":
                  response={"text":`${received_message.text} : `+a.info.template,}
                  break;
                  case "any":
                  response={"text":`${received_message.text} : `+a.info.any,}
                  break;
                  case "an":
                  response={"text":`${received_message.text} : `+a.info.an,}
                  break;
                  case "launch":
                  response={"text":`${received_message.text} : `+a.info.launch,}
                  break;
                  case "engineer":
                  response={"text":`${received_message.text} : `+a.info.engineer,}
                  break;
                  case "encode":
                  response={"text":`${received_message.text} : `+a.info.encode,}
                  break;
                  case "decode":
                  response={"text":`${received_message.text} : `+a.info.decode,}
                  break;
                  case "liquid":
                  response={"text":`${received_message.text} : `+a.info.liquid,}
                  break;
                  case "console":
                  response={"text":`${received_message.text} : `+a.info.console,}
                  break;
                  case "quick":
                  response={"text":`${received_message.text} : `+a.info.quick,}
                  break;
                  case "request":
                  response={"text":`${received_message.text} : `+a.info.request,}
                  break;
                  case "love":
                  response={"text":`${received_message.text} : `+a.info.love,}
                  break;
                  case "application":
                  response={"text":`${received_message.text} : `+a.info.application,}
                  break;
                  case "tool":
                  response={"text":`${received_message.text} : `+a.info.tool,}
                  break;
                  case "remote":
                  response={"text":`${received_message.text} : `+a.info.remote,}
                  break;
                  case "token":
                  response={"text":`${received_message.text} : `+a.info.token,}
                  break;
                  case "verify":
                  response={"text":`${received_message.text} : `+a.info.verify,}
                  break;
                  case "perform":
                  response={"text":`${received_message.text} : `+a.info.perform,}
                  break;
                  case "pointer":
                  response={"text":`${received_message.text} : `+a.info.pointer,}
                  break;
                  case "package":
                  response={"text":`${received_message.text} : `+a.info.package,}
                  break;
                  case "place":
                  response={"text":`${received_message.text} : `+a.info.place,}
                  break;
                  case "play":
                  response={"text":`${received_message.text} : `+a.info.play,}
                  break;
                  case "player":
                  response={"text":`${received_message.text} : `+a.info.player,}
                  break;
                  case "engine":
                  response={"text":`${received_message.text} : `+a.info.engine,}
                  break;
                  case "exchange":
                  response={"text":`${received_message.text} : `+a.info.exchange,}
                  break;
                  case "trash":
                  response={"text":`${received_message.text} : `+a.info.trash,}
                  break;
                  case "tree":
                  response={"text":`${received_message.text} : `+a.info.tree,}
                  break;
                  case "garbage":
                  response={"text":`${received_message.text} : `+a.info.garbage,}
                  break;
                  case "graphic":
                  response={"text":`${received_message.text} : `+a.info.graphic,}
                  break;
                  case "game":
                  response={"text":`${received_message.text} : `+a.info.game,}
                  break;
                  case "good":
                  response={"text":`${received_message.text} : `+a.info.good,}
                  break;
                  case "twist":
                  response={"text":`${received_message.text} : `+a.info.twist,}
                  break;
                  case "tamed":
                  response={"text":`${received_message.text} : `+a.info.tamed,}
                  break;
                  case "test":
                  response={"text":`${received_message.text} : `+a.info.test,}
                  break;
                  case "use":
                  response={"text":`${received_message.text} : `+a.info.use,}
                  break;
                  case "inter":
                  response={"text":`${received_message.text} : `+a.info.inter,}
                  break;
                  case "nice":
                  response={"text":`${received_message.text} : `+a.info.nice,}
                  break;
                  case "know":
                  response={"text":`${received_message.text} : `+a.info.know,}
                  break;
                  case "disappointed":
                  response={"text":`${received_message.text} : `+a.info.disappointed,}
                  break;
                  case "service":
                  response={"text":`${received_message.text} : `+a.info.service,}
                  break;
                  case "submation":
                  response={"text":`${received_message.text} : `+a.info.submation,}
                  break;
                  case "subtraction":
                  response={"text":`${received_message.text} : `+a.info.subtraction,}
                  break;
                  case "soccer":
                  response={"text":`${received_message.text} : `+a.info.soccer,}
                  break;
                  case"control":
                  response={"text": `${received_message.text}: `+a.info.control,}
                  break;
                  case "see":
                  response={"text":`${received_message.text} : `+a.info.see,}
                  break;
                  case "stop":
                  response={"text":`${received_message.text} : `+a.info.stop,}
                  break;
                  case "bad":
                  response={"text":`${received_message.text} : `+a.info.bad,}
                  break;
                  case "sad":
                  response={"text":`${received_message.text} : `+a.info.sad,}
                  break;
                  case "server":
                  response={"text":`${received_message.text} : `+a.info.server,}
                  break;
                  case "notification":
                  response={"text":`${received_message.text} : `+a.info.Notification,}
                  break;
                  case "more":
                  response={"text":`${received_message.text} : `+a.info.more,}
                  break;
                  case "most":
                  response={"text":`${received_message.text} : `+a.info.most,}
                  break;
                  case "mountain":
                  response={"text":`${received_message.text} : `+a.info.mountain,}
                  break;
                  case "clear":
                  response={"text":`${received_message.text} : `+a.info.clear,}
                  break;
                  case "clean":
                  response={"text":`${received_message.text} : `+a.info.clean,}
                  break;
                  case "notification":
                  response={"text":`${received_message.text} : `+a.info.Notification,}
                  break;
                  case "user":
                  response={"text":`${received_message.text} : `+a.info.user,}
                  break;
                  case "chat":
                  response={"text":`${received_message.text} : `+a.info.chat,}
                  break;
                  case "while":
                  response={"text":`${received_message.text} : `+a.info.while,}
                  break;
                  case "so":
                  response={"text":`${received_message.text} : `+a.info.so,}
                  break;
                  case "next":
                  response={"text":`${received_message.text} : `+a.info.next,}
                  break;
                  case "view":
                  response={"text":`${received_message.text} : `+a.info.view,}
                  break;
                  case "extension":
                  response={"text":`${received_message.text} : `+a.info.extension,}
                  break;
                  case "market":
                  response={"text":`${received_message.text} : `+a.info.market,}
                  break;
                  case "marketplace":
                  response={"text":`${received_message.text} : `+a.info.marketplace,}
                  break;
                  case "supermarket":
                  response={"text":`${received_message.text} : `+a.info.supermarket,}
                  break;
                  case "book":
                  response={"text":`${received_message.text} : `+a.info.book,}
                  break;
                  case "direct":
                  response={"text":`${received_message.text} : `+a.info.direct,}
                  break;
                  case "dict":
                  response={"text":`${received_message.text} : `+a.info.dict,}
                  break;
                  case "dictionary":
                  response={"text":`${received_message.text} : `+a.info.dictionary,}
                  break;
                  case "directory":
                  response={"text":`${received_message.text} : `+a.info.directory,}
                  break;
                  case "mess":
                  response={"text":`${received_message.text} : `+a.info.mess,}
                  break;
                  case "hear":
                  response={"text":`${received_message.text} : `+a.info.hear,}
                  break;
                  case "heave":
                  response={"text":`${received_message.text} : `+a.info.heave,}
                  break;
                  case "negative":
                  response={"text":`${received_message.text} : `+a.info.negative,}
                  break;
                  case "download":
                  response={"text":`${received_message.text} : `+a.info.download,}
                  break;
                  case "stackoverflow":
                  response={"text": `${received_message.text} : `+a.info.stackoverflow,}
                  break;
                  case "pain":
                  response={"text": `${received_message.text} : `+a.info.pain,}
                  break;
                  case "received":
                  response={"text": `${received_message.text} : `+a.info.received,}
                  break;
                  case "rush":
                  response={"text": `${received_message.text} : `+a.info.rush,}
                  break;
                  case "cross":
                  response={"text": `${received_message.text} : `+a.info.cross,}
                  break;
                  case "error":
                  response={"text": `${received_message.text} : `+a.info.error,}
                  break;
                  case "press":
                  response={"text": `${received_message.text} : `+a.info.press,}
                  break;
                  case "plugin":
                  response={"text": `${received_message.text} : `+a.info.plugin,}
                  break;
                  case "warning":
                  response={"text": `${received_message.text} : `+a.info.warning,}
                  break;
                  case "index":
                  response={"text": `${received_message.text} : `+a.info.index,}
                  break;
                  case "new":
                  response={"text": `${received_message.text} : `+a.info.new,}
                  break;
                  case "try":
                  response={"text": `${received_message.text} : `+a.info.try,}
                  break;
                  case "decimal":
                  response={"text": `${received_message.text} : `+a.info.decimal,}
                  break;
                  case "upper":
                  response={"text": `${received_message.text} : `+a.info.upper,}
                  break;
                  case "space":
                  response={"text": `${received_message.text} : `+a.info.space,}
                  break;
                  case "lower":
                  response={"text": `${received_message.text} : `+a.info.lower,}
                  break;
                  case "translate":
                  response={"text": `${received_message.text} : `+a.info.translate,}
                  break;
                  case "value":
                  response={"text": `${received_message.text} : `+a.info.value,}
                  break;
                  case "champion":
                  response={"text": `${received_message.text} : `+a.info.champion,}
                  break;
                  case "content":
                  response={"text": `${received_message.text} : `+a.info.content,}
                  break;
                  case "mason":
                  response={"text": `${received_message.text} : `+a.info.mason,}
                  break;
                  case "print":
                  response={"text": `${received_message.text} : `+a.info.print,}
                  break;
                  case "paint":
                  response={"text": `${received_message.text} : `+a.info.paint,}
                  break;
                  case "intial":
                  response={"text": `${received_message.text} : `+a.info.intial,}
                  break;
                  case "string":
                  response={"text": `${received_message.text} : `+a.info.string,}
                  break;
                  case "property":
                  response={"text": `${received_message.text} : `+a.info.property,}
                  break;
                  case "program":
                  response={"text": `${received_message.text} : `+a.info.program,}
                  break;
                  case "programming":
                  response={"text": `${received_message.text} : `+a.info.programming,}
                  break;
                  case "origin":
                  response={"text": `${received_message.text} : `+a.info.origin,}
                  break;
                  case "phising":
                  response={"text": `${received_message.text} : `+a.info.phising,}
                  break;
                  case "right":
                  response={"text": `${received_message.text} : `+a.info.right,}
                  break;
                  case "left":
                  response={"text": `${received_message.text} : `+a.info.left,}
                  break;
                  case "invite":
                  response={"text": `${received_message.text} : `+a.info.invite,}
                  break;
                  case "prime":
                  response={"text": `${received_message.text} : `+a.info.prime,}
                  break;
                  case "integer":
                  response={"text": `${received_message.text} : `+a.info.integer,}
                  break;
                  case "default":
                  response={"text": `${received_message.text} : `+a.info.default,}
                  break;
                  case "publish":
                  response={"text": `${received_message.text} : `+a.info.publish,}
                  break;
                  case "main":
                  response={"text": `${received_message.text} : `+a.info.main,}
                  break;
                  case "navigator":
                  response={"text": `${received_message.text} : `+a.info.navigator,}
                  break;
                  case "list":
                  response={"text": `${received_message.text} : `+a.info.list,}
                  break;
                  case "my":
                  response={"text": `${received_message.text} : `+a.info.my,}
                  break;
                  case "lose":
                  response={"text": `${received_message.text} : `+a.info.love,}
                  break;
                  case "win":
                  response={"text": `${received_message.text} : `+a.info.win,}
                  break;
                  case "reserved":
                  response={"text": `${received_message.text} : `+a.info.reserved,}
                  break;
                  case "foreign":
                  response={"text": `${received_message.text} : `+a.info.foreign,}
                  break;
                  case "push":
                  response={"text": `${received_message.text} : `+a.info.push,}
                  break;
      case "#elonmusk":
          response={"text":`${received_message.text} : `+SearchBot[24],}
          break;
      case "pass":
          response={"text":"đưa qua ,qua,cho qua",}
      break;
      case "No fap":
      case "no fap":
          response={"text":encode_searchbot[2],}
      break;
      case "1 day no fap thành công":
      case "no fap thành công":
      case "No fap thành công":
            response={"text":encode_searchbot[1],}
        break;
      case "web bot":
      case "web bot":
      case "#web bot":
      case"#webbot":
      response = {
        "text": "this is web bot : https://demo-clearlove-dev.herokuapp.com/",}
      break;
      case "#getday":
          response={"text":`${received_message.text} : `+day+"/"+month+"/"+year,}
          break;
      case "#getdaytime":
      case "#gettime":
          response={"text":`${received_message.text} : `+date,}
          break;
      case "How old are you?":
      case "how old are you?":
        response={"text": "I'm sory I don't know )):",}
        break;
      case "how are you?":
      case "bạn có khỏe không?":
        response={"text": "I am fine thank you and you?",}
        break;
      case "tôi khỏe":
      case "tôi ổn":
      case "I'm fine":
      case"I am fine":
        response={"text": "ohhh",}
        break;
      case"where are you from?":
      case"bạn đến từ đâu?":
        response={"text": "I'm from Da nang city in VietNam",}
        break;
      case "What is your name?":
      case "what is your name?":
      case "bạn tên là gì?":
      case"bạn tên gì?":
        response={"text": "My name is BotChatCLearLove7 🤖",}
        break;  
      case "Boss":
      case "boss":
        response={"text": "My Boss https://www.facebook.com/Ytttuong1/ 😎 ",}
        break;
      case "help":
      case "cứu":
      case"cíu":
        response={"text": SearchBot[25],}
      break;
      case"page bot":
        response={"text": "https://www.facebook.com/Bot-117828560890633/",}
        break;
      case "bot":
      case "bot ơi":
      case "bot oi":
        response={"text": "có phải bạn đang gọi tôi không?",}
      break;
      case "vâng":
      case "vang":
      case "yep":
      case "vâng ạ":
      case "Vâng":
      case "Vâng ạ":
        response={"text": "tôi có thể giúp gì bạn ?",}
        break;
      case "Hi":
      case "hi":
      case "Hello":
      case "hello":
      case 2:
      case"2":
      case "hai":
      case "chào":
      case "hello bot":
          response={"text": "Hi!",}
          break;
}

  if(received_message.text==="#Tường"){
    response = {"text": `${received_message.text} : Tường nick name Clearlove7 Profile : `+SearchBot[36],
    }
}

   else if (received_message.attachments) {
    let attachment_url = received_message.attachments[0].payload.url;
    response = {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "generic",
          "elements": [{
            "title": "oh ảnh của bạn thật đẹp",
            "subtitle": "bạn có thấy nó đẹp không?",
            "image_url": attachment_url,
            "title":"cảm ơn vì đã gửi ảnh cho tôi ^^",
            "buttons": [
              {
                "type": "postback",
                "title": "Có rất đẹp ((: !",
                "payload": "yes",
              },
              {
                "type": "postback",
                "title": "Không đẹp chút nào !",
                "payload": "no",
              }
            ],
          }]
        }
      }
    }
  } 
  callSendAPI(sender_psid, response);   

}

function handlePostback(sender_psid, received_postback) {
    let response;
    
    let payload = received_postback.payload;

    if (payload === 'yes') {
      response = { "text": "Cảm ơn!" }
    } else if (payload === 'no') {
      response = { "text": "ohhh, cảm ơn vì bạn đã nhận xét <: " }
    }
    
    callSendAPI(sender_psid, response);
}

function callSendAPI(sender_psid, response) {
    let request_body = {
      "recipient": {
        "id": sender_psid
      },
      "message": response
    }
    
    request({
      "uri": "https://graph.facebook.com/v2.6/me/messages",
      "qs": { "access_token": PAGE_ACCESS_TOKEN },
      "method": "POST",
      "json": request_body
    },
      (err, res, body) => {
        if (!err) {
          console.log('message sent!');//
        
        } else {
          console.error("Unable to send message:" + err);
        }
    });
}
module.exports = {
    getHomePage: getHomePage,
    getWebhook: getWebhook,
    postWebhook: postWebhook
}












