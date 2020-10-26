function talk() {
   
    var know={
       
        "hi" : "Hello,This is Interview Simulation Bot ",
        "how are you" : "Good :)",
        "tell me about yourself" : "U have to Introduce yourself.  Example : Good  morning Sir/Ma'am.First of all thank you for giving this wonderful or great opportunity to me to introduce my self in front of you.My self ***.At present I am pursuing final year B.Tech ECE at ***(college name) in **(place).My hobbies are playing cricket,participating on events.",
        "what are your biggest strengths ?" : "My strength is positive minded and easy to mingle with team members,hardworker and good problem solver.",
        "what are your biggest weakness ?" : "I have trouble saying NO.",
        "what is your passion/goal ?" : "My short term goal is to get placed in reputed organisation like yours and enhance my skills and My long term goal is to give smile to my parents through my hard work, make them proud of me.",
        "where do you see yourself in 5 years ?" : "I would be on the fast track to becoming a project manager. That’s my top career goal.",
        "why should i hire you ?" : "You can do the work and deliver exceptional results. You will fit in beautifully and be a great addition to the team. You possess a combination of skills and experience that make you stand out from the crowd.",
        "what motivates you ?" : "improving processes, finding ways to solving problems,learning new things and overcoming challenges.",
        "what are your salary expectations and requirements ?" : "I’d prefer if this discussion takes place after an offer has been made. In any case, I trust the package will be appropriate for my level of experience and the industry.",
        "Ok All the best u can go now " : "Thank you sir/Ma'am.",
      
    };
   
    var user=document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML= user + "<br>";
    if(user in know){
        document.getElementById('chatLog').innerHTML= know[user] + "<br>";
    }else{
        document.getElementById('chatLog').innerHTML=  "Sorry,I didn't understand <br>";
    }

}
