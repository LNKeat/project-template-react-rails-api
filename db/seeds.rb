Camper.create(username:"firstcamper", password_digest:"cat", is_admin:true)
Camper.create(username:"secondcamper", password_digest:"cat", is_admin:true)
Camper.create(username:"thirdcamper", password_digest:"cat", is_admin:false)
Camper.create(username:"fourthcamper", password_digest:"cat", is_admin:false)
Camper.create(username:"fifthcamper", password_digest:"cat", is_admin:false)

Campsite.create(site_number:1, description:"This site is a great site for accessing a bathroom", img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmHdNfPYFudyZcfEv8-OTNPFNS1RszmrwNjA&usqp=CAU")
Campsite.create(site_number:2, description:"Gorgeous views! Be sure to book this site", img_url:"https://www.gearo.com/wp-content/uploads/2018/09/campsite_concierge1.png")
Campsite.create(site_number:3, description:"Bring your next group to this site. Perfect space for a large group of tents", img_url:"https://www.familyparks.com.au/wp-content/uploads/2021/12/shutterstock_462419059-scaled.jpg")
Campsite.create(site_number:4, description:"If you're looking for a pet friendly campsite, this one is for you.", img_url:"https://www.rei.com/learn/expert-advice/campsite-selection.html")

campers = Camper.all.ids
campsites = Campsite.all.ids

10.times do 
    Reservation.create(camper_id:campers.sample, campsite_id:campsites.sample)
end

p "seeded"



