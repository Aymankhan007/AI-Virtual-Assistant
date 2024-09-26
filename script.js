let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")


function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Aymaan ")
    }
    else if(hours>=12 && hours <16){
        speak("Good Afternoon Aymaan ")
    }else{
        speak("Good Evening Aymaan ")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult= (event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello")){
        speak("hello sir, how can i help you?")
    }
    else if(message.includes("about yourself")){
        speak("hey i am alexa and am your A-I virtual assistant, created and maintained by Sir Aymaan")
    }
    else if(message.includes("created")){
        speak("i was created and developed by Mr Aymaan.")
    }
    else if(message.includes("purpose")){
        speak("My purpose is to assist you inform you and provide helpful accurate and engaging responses to your questions or tasks")
    }
    else if(message.includes("feelings")|| message.includes("emotions")){
        speak("no,i don't have feelings, i don't experience emotions like humans do.")
    }
    else if(message.includes("how are you")){
        speak("Good to see you sir ,I am absolutely fantastic,what about you")
    }
    else if(message.includes("kill")){
        speak("ohh really , then be ready to face something that you haven't imagined in your dreams.")
    }
    else if(message.includes("technology")){
        speak("hey i am alexa and i am based on machine learning technology and many more , i am not allowed to disclose it due to owner restrictions.")
    }
    else if(message.includes("owner")){
        speak("ohh well ,my owner is mr aymaan, he is a college going third year student at rgpv s-o-i-t university and he is currently enrolled in computer science data science branch. ")
    }
    else if(message.includes("favourite song")){
        speak("well, my most favorite songs are kuun-faayaa-kuun , tum-hoo, from rockstar and to be honest this list is never ending.. ")
    }

    else if(message.includes("open google")){
        speak("opening google sir...")
        window.open("https://www.google.com","_blank")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube sir...")
        window.open("https://www.youtube.com","_blank")
    }
    else if(message.includes("play arijit singh on youtube")){
        speak("playing arijit singh on youtube...")
        window.open("https://www.youtube.com/watch?v=O5gwxm3NxFU","_blank")
    }
    else if(message.includes("play kk on youtube")){
        speak("playing k-k on youtube...")
        window.open("https://www.youtube.com/watch?v=r0c1f6XxRQg","_blank")
    }
    else if(message.includes("play karan aujla on youtube")){
        speak("playing karan aujla on youtube...")
        window.open("https://www.youtube.com/watch?v=vsWxs1tuwDk&list=PLMUccrAjEVQI5hKr_qEgeG-zxUnDtYDXS","_blank")
    }
    else if(message.includes("play one direction on youtube")){
        speak("playing one direction on youtube...")
        window.open("https://www.youtube.com/watch?v=QJO3ROT-A4E&list=RDEMASm6zw3fwwNHHUAmqi82kg&start_radio=1","_blank")
    }
    else if(message.includes("play weekend on youtube")){
        speak("playing weekend on youtube...")
        window.open("https://www.youtube.com/watch?v=yzTuBuRdAyA&list=RDEMHSpo_Uv9STIRtF73zMywLg&start_radio=1","_blank")
    }
    else if(message.includes("play coldplay on youtube")){
        speak("playing coldplay on youtube...")
        window.open("https://www.youtube.com/watch?v=RB-RcX5DS5A&list=RDEMuf6htoZivPnz-ZIwGU0dDA&start_radio=1","_blank")
    }
    else if(message.includes("play atif aslam on youtube")){
        speak("playing atif alsam on youtube...")
        window.open("https://www.youtube.com/watch?v=rTuxUAuJRyY&list=PLJ_m5he3U0UyaXCGv01OG1e4yuVMfNmxv","_blank")
    }
    else if(message.includes("play ed sheeran on youtube")){
        speak("playing ed sheeran on youtube...")
        window.open("https://www.youtube.com/watch?v=u6wOyMUs74I&list=PLjp0AEEJ0-fGKG_3skl0e1FQlJfnx-TJz","_blank")
    }
    else if(message.includes("play taylor swift on youtube")){
        speak("playing taylor swift on youtube...")
        window.open("https://www.youtube.com/watch?v=e-ORhEE9VVg&list=RDEMb1vAi4rwXXeDlr7NZ68C_w&start_radio=1","_blank")
    }
    else if(message.includes("play beyonce on youtube")){
        speak("playing beyonce on youtube...")
        window.open("https://www.youtube.com/watch?v=AWpsOqh8q0M&list=RDEMENjbpvgLdYbcoTJt9iqLKg&start_radio=1","_blank")
    }
    else if(message.includes("play shawn mendes on youtube")){
        speak("playing shawn mendes on youtube...")
        window.open("https://www.youtube.com/watch?v=lY2yjAdbvdQ&list=RDEMojbp98PlUg61wCtEnpxDNw&start_radio=1","_blank")
    }
    else if(message.includes("play bruno mars on youtube")){
        speak("playing bruno mars on youtube...")
        window.open("https://www.youtube.com/watch?v=GG7fLOmlhYg&list=PL2gNzJCL3m_8e21QH4D-Kz5KB7iC-Dk23","_blank")
    }
    else if(message.includes("play dua lipa on youtube")){
        speak("playing dua lipa on youtube...")
        window.open("https://www.youtube.com/watch?v=a9cyG_yfh1k&list=PLNrotoZZ8BaoXT_LJuwEyESQlctWNDCwD","_blank")
    }
    else if(message.includes("play eminem on youtube")){
        speak("playing eminem on youtube...")
        window.open("https://www.youtube.com/watch?v=j5-yKhDd64s&list=PLBF1A9AA3A1D817F1","_blank")
    }
    else if(message.includes("play kishore kumar on youtube")){
        speak("playing kishore kumar on youtube...")
        window.open("https://www.youtube.com/watch?v=yIzCBU0_LyY&list=RDEMa_EYmHyXjUx2YUwQ3j4-UQ&start_radio=1","_blank")
    }
    else if(message.includes("play rafi on youtube")){
        speak("playing rafi songs on youtube...")
        window.open("https://www.youtube.com/watch?v=UDQXqRQ0s0Y","_blank")
    }
    else if(message.includes("play neeraj kumar show on youtube")){
        speak("opening the neeraj kumar show on youtube...")
        window.open("https://www.youtube.com/@The_Neeraj_Kumar_Show","_blank")
    }


    else if(message.includes("open facebook")){
        speak("opening facebook sir...")
        window.open("https://www.facebook.com","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram sir...")
        window.open("https://www.instagram.com","_blank")
    }
    else if(message.includes("open spotify")){
        speak("opening spotify sir...")
        window.open("https://www.spotify.com","_blank")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp sir...")
        window.open("https://www.whatsapp.com","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator sir...")
        window.open("calculator://")
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }
    else {
        let finalText="this is what i found on internet regarding" + message.replace("alexa","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("alexa","")}`, "_blank")
    }
}