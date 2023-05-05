Camper.create(username:"firstcamper", password:"cat", is_admin:false)
Camper.create(username:"secondcamper", password:"cat", is_admin:true)
Camper.create(username:"thirdcamper", password:"cat", is_admin:false)
Camper.create(username:"fourthcamper", password:"cat", is_admin:false)
Camper.create(username:"fifthcamper", password:"cat", is_admin:false)

Campsite.create(site_number:1, description:"This site is a great site for accessing a bathroom", img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmHdNfPYFudyZcfEv8-OTNPFNS1RszmrwNjA&usqp=CAU")
Campsite.create(site_number:2, description:"Gorgeous views! Be sure to book this site", img_url:"https://www.gearo.com/wp-content/uploads/2018/09/campsite_concierge1.png")
Campsite.create(site_number:3, description:"Bring your next group to this site. Perfect space for a large group of tents", img_url:"https://www.familyparks.com.au/wp-content/uploads/2021/12/shutterstock_462419059-scaled.jpg")
Campsite.create(site_number:4, description:"If you're looking for a pet friendly campsite, this one is for you.", img_url:"https://buttehumane.org/wp-content/uploads/sites/1/2016/08/camping-with-dog.jpg")

campers = Camper.all.ids
campsites = Campsite.all.ids

10.times {
    sd = (Faker::Date.between(from: '2023-05-01', to: '2023-09-30'))
    ed = sd + rand(1..7)
    Reservation.create(camper_id:campers.sample, campsite_id:campsites.sample, start_date:sd, end_date:ed)
}


p "seeded"



