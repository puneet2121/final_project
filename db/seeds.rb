# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
houses = House.create([
  {
    address: '2349 West 99th',
    number_of_tenants: 3,
    image: 'https://images.rentals.ca/property-pictures/medium/vancouver-bc/337361/apartment-2336904.jpg'
  },
  {
    address: '3478 East 13th',
    number_of_tenants: 2,
    image: 'https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat4&accessoriesType=Round&hatColor=Red&hairColor=Blonde&facialHairType=Blank&facialHairColor=Black&clotheType=BlazerSweater&eyeType=Dizzy&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Pale'
  }
])

users = User.create([
  {
    name: 'Jennie Inez',
    image: 'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairCurvy&accessoriesType=Prescription02&hatColor=Black&hairColor=Platinum&facialHairType=BeardMedium&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Blue02&graphicType=Diamond&eyeType=Surprised&eyebrowType=Default&mouthType=Serious&skinColor=Tanned',
    bio: 'B2B target audience usability credentials transparent tackle it consolidate deliverables client-facing',
    house: houses.first
  },
  {
    name: 'Daley Tanya',
    image: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
    bio: 'Proposed high-level ETA conversion client-facing synergy internally segment',
    house: houses.first
  },
  {
    name: 'Merry Ira',
    image: 'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairCurly&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&facialHairColor=Blonde&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Grimace&skinColor=Pale',
    bio: 'Push the envelope value creation strategic partners high-level pivot next steps onboarding',
    house: houses.first
  },
  {
    name: 'Beryl Constance',
    image: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Round&hairColor=Platinum&facialHairType=MoustacheFancy&facialHairColor=Blonde&clotheType=BlazerSweater&clotheColor=White&eyeType=Surprised&eyebrowType=UpDownNatural&mouthType=ScreamOpen&skinColor=Brown',
    bio: 'Client-facing hackathon ROI pipeline cohesive mock up agile third party cross platform',
    house: houses.first
  },
  {
    name: 'Aric Poppy',
    image: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairFrizzle&accessoriesType=Prescription01&hairColor=PastelPink&facialHairType=BeardLight&facialHairColor=Platinum&clotheType=ShirtCrewNeck&clotheColor=PastelBlue&eyeType=EyeRoll&eyebrowType=SadConcernedNatural&mouthType=Disbelief&skinColor=Brown',
    bio: 'Client-facing whiteboard next steps transparent tackle it responsive behavior heads down third party',
    house: houses.first
  }
])

houses = House.all
users = User.all
chores = Chore.create([
  {
    chore_name: 'Doing the dishes',
    status: 'Not assigned',
    occurence: 'daily',
    house: houses.first,
    user: users.first
  },
  {
    chore_name: 'Vaccuming',
    status: 'Assigned',
    occurence: 'weekly',
    house: houses.first,
    user: users[1]
  },
  {
    chore_name: 'Getting groceries',
    status: 'Not assigned',
    occurence: 'weekly',
    house: houses.first,
    user: users[2]
  }
])