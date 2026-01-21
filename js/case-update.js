function submitUpdate(){
  const caseNo = caseNoEl.value || document.getElementById("caseNo").value;
  const date = document.getElementById("eventDate").value;
  const party = document.getElementById("party").value;
  const partyOther = document.getElementById("partyOther").value || "NADNS";
  const judge = document.getElementById("judge").value || "NADNS";
  const desc = document.getElementById("desc").value;

  if(!caseNo || !date || !desc){
    alert("Case No, Date, and Description required");
    return;
  }

  const params = new URLSearchParams({
    "entry.1246407252": caseNo,
    "entry.211192701": date,
    "entry.1552263291": party,
    "entry.1552263291.other_option_response": partyOther,
    "entry.1933078191": judge,
    "entry.1124117797": desc
  });

  const url = "https://docs.google.com/forms/d/e/1FAIpQLSd7z_NTRHAhaVVUAG3ER2Ltce2J-0q7dx3sUqqBlDaEZRyaAw/formResponse?" + params.toString();

  // silent submit
  fetch(url,{mode:"no-cors"});

  alert("Case update submitted successfully.");
}
