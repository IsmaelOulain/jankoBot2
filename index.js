const  Discord  = require('discord.js');
const { Client,MessageAttachment}= require('discord.js');
const client = new Discord.Client();

client.login(process.env.token);

const cooldown= new Set();

client.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;
    switch(message.content){
      case '/help':{
        //message.reply('cojone che cazzo non capisci');
        message.channel.send('/chandu  \n'+'/cesco \n'+'/ok \n'+'/eva\n'+'/balzo \n'+'/fnatic\n'+'/morto\n'+'/negro\n'+'/ciao\n'+'/whds\n'+'/tourette\n'+'/dc\n'+'/cap\n'+'/notlnt\n'+'/orgsm\n'+'/drift\n'+'/shiton\n'+'/genji\n'+'/broken\n');
        //message.channel.send('/cesco l inglese di cesco');
        //message.channel.send('/ok AHH OKKKKEEEYYYY');
        //message.channel.send('/eva sisqo che dice per l ennesima volta di vedere evangelion ');
        //message.channel.send('/balzo beh.. il king di como lake');
        //message.channel.send('/fnatic la collaborazione che interessa a sisqo');
        //message.channel.send('/morto sei morto hiru');
  }
      break;
      case '/morto':{
        if (message.member.voice.channel) {
          const connection = await message.member.voice.channel.join();
          const dispatcher = connection.play('./record/morto.opus');
        } else {
          message.reply('a coglione entra in vocale per farlo');
        }
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
          const dispatcher = connection.play('./record/cha_ndu.mp3');
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
        if (message.member.voice.channel) {
          // const ayy = client.emojis.find(emoji => emoji.name === "cha");
           //message.reply(`${ayy} LMAO`);
          const attachment = new MessageAttachment('https://imgur.com/UJnyJHy.png' );
           const connection = await message.member.voice.channel.join();
           
           message.channel.send(attachment);
           const dispatcher = connection.play('./record/whods.mp3');
            //message.member.voice.channel.leave();
         } else {
           message.reply('big fail fra');
         }
      }
      break;
         case '/tourette':{
        if (message.member.voice.channel) {
          // const ayy = client.emojis.find(emoji => emoji.name === "cha");
           //message.reply(`${ayy} LMAO`);
           //const attachment = new MessageAttachment('https://imgur.com/wJK5ggK.png');
           const connection = await message.member.voice.channel.join();
           
           //message.channel.send(attachment);
           const dispatcher = connection.play('./record/tourette.mp3');
         } else {
           message.reply('big fail fra');
         }
      }
     break;
        case '/dc':{
        if (message.member.voice.channel) {
          // const ayy = client.emojis.find(emoji => emoji.name === "cha");
           //message.reply(`${ayy} LMAO`);
           //const attachment = new MessageAttachment('https://imgur.com/wJK5ggK.png');
           const connection = await message.member.voice.channel.join();
           
           //message.channel.send(attachment);
           const dispatcher = connection.play('./record/dc.mp3');
         } else {
           message.reply('big fail fra');
         }
      }
     break;
     case '/cap':{
        if (message.member.voice.channel) {
          const connection = await message.member.voice.channel.join();
          const dispatcher = connection.play('./record/cap.mp3');
        } else {
          message.reply('a coglione entra in vocale per farlo');
        }
      }
      break;
      case '/orgsm':{
        if (message.member.voice.channel) {
          const connection = await message.member.voice.channel.join();
          const dispatcher = connection.play('./record/orgsm.mp3');
        } else {
          message.reply('a coglione entra in vocale per farlo');
        }
      }
      break;
        case '/notlnt':{
        if (message.member.voice.channel) {
          // const ayy = client.emojis.find(emoji => emoji.name === "cha");
           //message.reply(`${ayy} LMAO`);
           //const attachment = new MessageAttachment('https://imgur.com/wJK5ggK.png');
           const connection = await message.member.voice.channel.join();
           
           //message.channel.send(attachment);
           const dispatcher = connection.play('./record/squid.mp3');
         } else {
           message.reply('big fail fra');
         }
      }
      break;
      case '/40':{
        if (message.member.voice.channel) {
          // const ayy = client.emojis.find(emoji => emoji.name === "cha");
           //message.reply(`${ayy} LMAO`);
           //const attachment = new MessageAttachment('https://imgur.com/wJK5ggK.png');
           const connection = await message.member.voice.channel.join();
           
           //message.channel.send(attachment);
           const dispatcher = connection.play('./record/40.mp3');
         } else {
           message.reply('big fail fra');
         }
      }
      break;
      case '/genji':{
        if (message.member.voice.channel) {
          // const ayy = client.emojis.find(emoji => emoji.name === "cha");
           //message.reply(`${ayy} LMAO`);
           //const attachment = new MessageAttachment('https://imgur.com/wJK5ggK.png');
           const connection = await message.member.voice.channel.join();
           
           //message.channel.send(attachment);
           const dispatcher = connection.play('./record/ninja.mp3');
         } else {
           message.reply('big fail fra');
         }
      }
      break;
      case '/drift':{
        if (message.member.voice.channel) {
          // const ayy = client.emojis.find(emoji => emoji.name === "cha");
           //message.reply(`${ayy} LMAO`);
           //const attachment = new MessageAttachment('https://imgur.com/wJK5ggK.png');
           const connection = await message.member.voice.channel.join();
           
           //message.channel.send(attachment);
           const dispatcher = connection.play('./record/drift.ogg');
         } else {
           message.reply('big fail fra');
         }
      }
      break;
      case '/shiton':{
        if (message.member.voice.channel) {
          // const ayy = client.emojis.find(emoji => emoji.name === "cha");
           //message.reply(`${ayy} LMAO`);
           //const attachment = new MessageAttachment('https://imgur.com/wJK5ggK.png');
           const connection = await message.member.voice.channel.join();
           
           //message.channel.send(attachment);
           //dispatcher.setVolume(0.8);
           const dispatcher = connection.play('./record/shiton.mp3');
         } else {
           message.reply('big fail fra');
         }
      }
      break;
      case '/negro':{
        if (message.member.voice.channel) {
          // const ayy = client.emojis.find(emoji => emoji.name === "cha");
           //message.reply(`${ayy} LMAO`);
           //const attachment = new MessageAttachment('https://imgur.com/wJK5ggK.png');
           const connection = await message.member.voice.channel.join();
           
           //message.channel.send(attachment);
           //dispatcher.setVolume(0.8);
           const dispatcher = connection.play('./record/negro.opus');
         } else {
           message.reply('big fail fra');
         }
      }
      break;
      case '/broken':{
        if (message.member.voice.channel) {
          // const ayy = client.emojis.find(emoji => emoji.name === "cha");
           //message.reply(`${ayy} LMAO`);
           //const attachment = new MessageAttachment('https://imgur.com/wJK5ggK.png');
           const connection = await message.member.voice.channel.join();
           
           //message.channel.send(attachment);
           //dispatcher.setVolume(0.8);
           const dispatcher = connection.play('./record/broken.mp3');
         } else {
           message.reply('big fail fra');
         }
      }
      break;
      case '/ciao':{
        if (message.member.voice.channel) {
          // const ayy = client.emojis.find(emoji => emoji.name === "cha");
           //message.reply(`${ayy} LMAO`);
           //const attachment = new MessageAttachment('https://imgur.com/wJK5ggK.png');
           const connection = await message.member.voice.channel.join();
           
           //message.channel.send(attachment);
           //dispatcher.setVolume(0.8);
           const dispatcher = connection.play('./record/ciao.opus');
         } else {
           message.reply('big fail fra');
         }
      }
      break;
      case '/ohno':{
        if (message.member.voice.channel) {
          // const ayy = client.emojis.find(emoji => emoji.name === "cha");
           //message.reply(`${ayy} LMAO`);
           //const attachment = new MessageAttachment('https://imgur.com/wJK5ggK.png');
           const connection = await message.member.voice.channel.join();
           
           //message.channel.send(attachment);
           //dispatcher.setVolume(0.8);
           const dispatcher = connection.play('./record/ohno.opus');
         } else {
           message.reply('big fail fra');
         }
      }
      break;
      case '/dafuq':{
        if (message.member.voice.channel) {
          // const ayy = client.emojis.find(emoji => emoji.name === "cha");
           //message.reply(`${ayy} LMAO`);
           //const attachment = new MessageAttachment('https://imgur.com/wJK5ggK.png');
           const connection = await message.member.voice.channel.join();
           
           //message.channel.send(attachment);
           //dispatcher.setVolume(0.8);
           const dispatcher = connection.play('./record/idy.mp3');
         } else {
           message.reply('big fail fra');
         }
      }
    }
  
  
 
  /*setTimeout(()=>{
     message.member.voice.channel.leave();
  },10000);*/
  
  //dopo 11 secondi esci
  if (message.content === '/join') {
    // Only try to join the sender's voice channel if they are in one themselves
    
    
  }
});
