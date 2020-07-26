const  Discord  = require('discord.js');
const { Client,MessageAttachment}= require('discord.js');
const client = new Discord.Client();

client.login(process.env.token);



client.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  switch(message.content){
    case '/help':{
      message.reply('cojone che cazzo non capisci');
      message.channel.send('/chandu per sentire il famigerato chandu \n'+'/cesco l inglese di cesco\n'+'/ok AHH OKKKKEEEYYYY\n'+'/eva sisqo che dice per l ennesima volta di vedere evangelion\n'+'/balzo beh.. il king di como lake\n'+'/fnatic la collaborazione che interessa a sisqo');
      message.channel.send('/cesco l inglese di cesco');
      message.channel.send('/ok AHH OKKKKEEEYYYY');
      message.channel.send('/eva sisqo che dice per l ennesima volta di vedere evangelion ');
      message.channel.send('/balzo beh.. il king di como lake');
      message.channel.send('/fanatic la collaborazione che interessa a sisqo');


    }
    break;
    case '/cesco':{
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play('./record/yessr.mp3');
      } else {
        message.reply('a coglione entra in vocale per farlo');
      }
    }
    break;
    case '/chandu':{
      if (message.member.voice.channel) {
       // const ayy = client.emojis.find(emoji => emoji.name === "cha");
        //message.reply(`${ayy} LMAO`);
        const attachment = new MessageAttachment('https://imgur.com/5hsPMFq.png');
        const connection = await message.member.voice.channel.join();
        
        message.channel.send(attachment);
        const dispatcher = connection.play('./record/cha_ndu.ogg');
      } else {
        message.reply('big fail fra');
      }
    }
    break;
    case '/eva':{
      if (message.member.voice.channel) {
        // const ayy = client.emojis.find(emoji => emoji.name === "cha");
         //message.reply(`${ayy} LMAO`);
         const attachment = new MessageAttachment('https://imgur.com/wJK5ggK.png');
         const connection = await message.member.voice.channel.join();
         
         message.channel.send(attachment);
         const dispatcher = connection.play('./record/eva.ogg');
       } else {
         message.reply('big fail fra');
       }
    }
    break;
    case '/fnatic':{
      if (message.member.voice.channel) {
        // const ayy = client.emojis.find(emoji => emoji.name === "cha");
         //message.reply(`${ayy} LMAO`);
        // const attachment = new MessageAttachment('https://imgur.com/wJK5ggK.png');
         const connection = await message.member.voice.channel.join();
         
         //message.channel.send(attachment);
         const dispatcher = connection.play('./record/fana.ogg');
       } else {
         message.reply('big fail fra');
       }
    }
    break;
    case '/balzo':{
      if (message.member.voice.channel) {
        // const ayy = client.emojis.find(emoji => emoji.name === "cha");
         //message.reply(`${ayy} LMAO`);
        const attachment = new MessageAttachment('https://imgur.com/ThjW1jh.png');
         const connection = await message.member.voice.channel.join();
         
         message.channel.send(attachment);
         const dispatcher = connection.play('./record/balza.ogg');
       } else {
         message.reply('big fail fra');
       }
    }
    break;
    case '/ok':{
      if (message.member.voice.channel) {
        // const ayy = client.emojis.find(emoji => emoji.name === "cha");
         //message.reply(`${ayy} LMAO`);
        //const attachment = new MessageAttachment('https://imgur.com/ThjW1jh.png');
         const connection = await message.member.voice.channel.join();
         
         //message.channel.send(attachment);
         const dispatcher = connection.play('./record/ahok.opus');

       } else {
         message.reply('big fail fra');
       }
    }
    break;
    case '/whds':{
      if(message.member.voice.channel){
        const attachment = new MessageAttachment('https://imgur.com/UJnyJHy.png');
        const connection = await message.member.voice.channel.join();
        
        message.channel.send(attachment);
        const dispatcher = connection.play('./record/whods.mp3');


      }else {
        message.reply('big fail fra');
      }
    }
    break;
  
  }
  if (message.content === '/join') {
    // Only try to join the sender's voice channel if they are in one themselves
    
    
  }
});