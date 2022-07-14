# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# houses = House.create([
#   {
#     address: '2349 West 99th',
#     number_of_tenants: 3,
#     image: 'https://images.rentals.ca/property-pictures/medium/vancouver-bc/337361/apartment-2336904.jpg'
#   },
#   {
#     address: '3478 East 13th',
#     number_of_tenants: 2,
#     image: 'https://www.theglobeandmail.com/resizer/n3RZ9XFIvl604wft0JF8GveFTHM=/arc-anglerfish-tgam-prod-tgam/public/GBHFSF76CBF6BDP32GINSJESHQ.JPG'
#   }
# ])

# users = User.create([
#   {
#     name: 'Ali Bouran',
#     image: 'https://media.istockphoto.com/vectors/simple-human-icon-business-design-isolated-on-white-background-vector-id1082096450?k=20&m=1082096450&s=170667a&w=0&h=s7SFmeD2a5b3YfVocArJ2FH9ZUfRbwrotlCXs5izOkQ=',
#     bio: 'I like trains.',
#     house: houses.first
#   },
#   {
#     name: 'Puneet Kumar',
#     image: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
#     bio: 'Lighthouse Labs',
#     house: houses.first
#   },
#   {
#     name: 'Henry Jr.',
#     image: 'https://www.gtiarmoredcars.com/wp-content/uploads/2021/02/62681-flat-icons-face-computer-design-avatar-icon.png',
#     bio: 'I love my roommates',
#     house: houses.first
#   },
#   {
#     name: 'Angy',
#     image: 'https://cdn2.vectorstock.com/i/1000x1000/32/01/user-sign-icon-person-symbol-human-avatar-vector-12693201.jpg',
#     bio: 'Books',
#     house: houses[1]
#   },
#   {
#     name: 'Andy',
#     image: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
#     bio: 'Cats',
#     house: houses[1]
#   }
# ])

houses = House.all

chores = Chore.create([
  {
    chore_name: 'Doing the dishes',
    status: 'Not assigned',
    occurence: 'daily',
    house: houses[1]
  },
  {
    chore_name: 'Vaccuming',
    status: 'Assigned',
    occurence: 'weekly',
    house: houses[1]
  },
  {
    chore_name: 'Getting groceries',
    status: 'Not assigned',
    occurence: 'weekly',
    house: houses[1]
  }
])