# Create a dictionary to store the table data
nutritional_values = {
    "1-3 Male": {
        "Protein (g)": 13,
        "Carbohydrate (g)": 130,
        "Total Fat (%kcal)": "30-40",
        "Calcium (mg)": 700,
        "Iron (mg)": 7
    },
    "1-3 Female": {
        "Protein (g)": 13,
        "Carbohydrate (g)": 130,
        "Total Fat (%kcal)": "30-40",
        "Calcium (mg)": 700,
        "Iron (mg)": 7
    },
    "4-8 (Female)": {
        "Protein (g)": 19,
        "Carbohydrate (g)": 130,
        "Total Fat (%kcal)": "25-35",
        "Calcium (mg)": 1000,
        "Iron (mg)": 10
    },
    "4-8 (Male)": {
        "Protein (g)": 19,
        "Carbohydrate (g)": 130,
        "Total Fat (%kcal)": "25-35",
        "Calcium (mg)": 1000,
        "Iron (mg)": 10
    },
    "9-13 (Female)": {
        "Protein (g)": 34,
        "Carbohydrate (g)": 130,
        "Total Fat (%kcal)": "25-35",
        "Calcium (mg)": 1300,
        "Iron (mg)": 8
    },
    "9-13 (Male)": {
        "Protein (g)": 34,
        "Carbohydrate (g)": 130,
        "Total Fat (%kcal)": "25-35",
        "Calcium (mg)": 1300,
        "Iron (mg)": 8
    },
    "14-18 (Female)": {
        "Protein (g)": 46,
        "Carbohydrate (g)": 130,
        "Total Fat (%kcal)": "25-35",
        "Calcium (mg)": 1300,
        "Iron (mg)": 15
    },
    "14-18 (Male)": {
        "Protein (g)": 52,
        "Carbohydrate (g)": 130,
        "Total Fat (%kcal)": "25-35",
        "Calcium (mg)": 1300,
        "Iron (mg)": 11
    }
}

# Get user input for age and gender
age = int(input("Enter the age of the child: "))
gender = input("Enter the gender of the child (Male/Female): ").strip().capitalize()

# Determine the age/gender category
if age >= 1 and age <= 3:
    category = "1-3 (Child)"
elif age >= 4 and age <= 8:
    category = "4-8 (Female)" if gender == "Female" else "4-8 (Male)"
elif age >= 9 and age <= 13:
    category = "9-13 (Female)" if gender == "Female" else "9-13 (Male)"
elif age >= 14 and age <= 18:
    category = "14-18 (Female)" if gender == "Female" else "14-18 (Male)"
else:
    category = "Age category not found"

# Display the nutritional values
if category in nutritional_values:
    print("\nNutritional Values for {} ({} years old):".format(gender, age))
    for nutrient, value in nutritional_values[category].items():
        print("{}: {}".format(nutrient, value))
else:
    print("Age category not found in the table.")






# def get_nutritional_values(age, gender):
#     # Define the nutritional values based on the provided table
#     nutritional_values = {
#         '1-3': {'male': [13, 130, '30-40', 700, 7],
#                 'female': [13, 130, '30-40', 700, 7]},
#         '4-8': {'male': [19, 130, '25-35', 1000, 10],
#                 'female': [19, 130, '25-35', 1000, 10]},
#         '9-13': {'male': [34, 130, '25-35', 1300, 8],
#                  'female': [34, 130, '25-35', 1300, 8]},
#         '14-18': {'male': [52, 130, '25-35', 1300, 11],
#                   'female': [46, 130, '25-35', 1300, 15]}
#     }

#     # Convert age to string for dictionary lookup
#     age_group = None
#     if 1 <= age <= 3:
#         age_group = '1-3'
#     elif 4 <= age <= 8:
#         age_group = '4-8'
#     elif 9 <= age <= 13:
#         age_group = '9-13'
#     elif 14 <= age <= 18:
#         age_group = '14-18'

#     if age_group and gender.lower() in ['male', 'female']:
#         return nutritional_values[age_group][gender.lower()]
#     else:
#         return None

# # Get user input
# age = int(input("Enter the age of the child: "))
# gender = input("Enter the gender of the child (male/female): ")

# # Get and print nutritional values
# nutritional_values = get_nutritional_values(age, gender)
# if nutritional_values:
#     print("\nNutritional Values






# # def generate_dietary_recommendations(child_age, child_gender):

# #   # Get the recommended nutritional values for the child's age and gender.
# #   recommended_values = {
# #       'protein': {
# #           '1-3 child': 13,
# #           '4-8 female': {'4-8 female': 19},
# #           '4-8 male': {'4-8 male': 19},
# #           '9-13 female': 34,
# #           '9-13 male': 34,
# #           '14-18 female': 46,
# #           '14-18 male': 52
# #       },
# #       'carbohydrate': {
# #           '1-3 child': 130,
# #           '4-8 female': 130,
# #           '4-8 male': 130,
# #           '9-13 female': 130,
# #           '9-13 male': 130,
# #           '14-18 female': 130,
# #           '14-18 male': 130
# #       },
# #       'total_fat': {
# #           '1-3 child': (30, 40),
# #           '4-8 female': (25, 35),
# #           '4-8 male': (25, 35),
# #           '9-13 female': (25, 35),
# #           '9-13 male': (25, 35),
# #           '14-18 female': (25, 35),
# #           '14-18 male': (25, 35)
# #       },
# #       'calcium': {
# #           '1-3 child': 700,
# #           '4-8 female': 1000,
# #           '4-8 male': 1000,
# #           '9-13 female': 1300,
# #           '9-13 male': 1300,
# #           '14-18 female': 1300,
# #           '14-18 male': 1300
# #       },
# #       'iron': {
# #           '1-3 child': 7,
# #           '4-8 female': 10,
# #           '4-8 male': 10,
# #           '9-13 female': 8,
# #           '9-13 male': 8,
# #           '14-18 female': 15,
# #           '14-18 male': 11
# #       }
# #   }

# #   # Generate personalized dietary recommendations.
# #   dietary_recommendations = []

# #   for nutrient in ['protein', 'carbohydrate', 'total_fat', 'calcium', 'iron']:
# #     recommended_value = recommended_values[nutrient][child_gender][child_age]
# #     dietary_recommendations.append('Eat {} grams of {} per day.'.format(recommended_value, nutrient))

# #     print(dietary_recommendations)
# #   return dietary_recommendations

# # generate_dietary_recommendations(5, 'female')



# # # def generate_dietary_recommendations(child_age, child_gender, child_weight, child_height):

# # #   """Generates personalized dietary recommendations for a child.

# # #   Args:
# # #     child_age: The child's age in years.
# # #     child_gender: The child's gender ('male' or 'female').
# # #     child_weight: The child's weight (in kgs).
# # #     child_height: The child's height (in feet).

# # #     protein
# # #     carbohydrate
# # #     calcium
# # #     vit a b c e
# # #     fat
# # #     iron
# # #     omega 3 fatty acid
# # #     fluids

# # #     Your baby's body and brain growth is the fastest during this age group. Proper intake of all nutrients like carbohydrates, fats, proteins, vitamins, and minerals, is absolutely essential to ensure optimal growth and development. Your baby's brain growth is most dependent on food and nutrition.

# # #   Returns:
# # #     A list of personalized dietary recommendations.
# # #   """

# # #   # Calculate the child's individual nutrient needs.
# # #   protein_needs = child_age * 1.5
# # #   fat_needs = child_age * 0.5
# # #   carbohydrate_needs = child_age * 2.5

# # #   # Develop a list of food groups that are good sources of each nutrient.
# # #   protein_rich_food_groups = ['meat', 'poultry', 'fish', 'beans', 'lentils']
# # #   fat_rich_food_groups = ['nuts', 'seeds', 'avocados', 'olive oil']
# # #   carbohydrate_rich_food_groups = ['fruits', 'vegetables', 'whole grains']

# # #   # Generate personalized dietary recommendations.
# # #   dietary_recommendations = []

# # #   for nutrient in ['protein', 'fat', 'carbohydrates']:
# # #     if child_dietary_intake[nutrient] < nutrient_needs:
# # #       dietary_recommendations.append('Eat more {}-rich foods.'.format(nutrient))

# # #   return dietary_recommendations

# # # # Example usage:

# # # child_age = 5
# # # child_gender = 'female'
# # # child_activity_level = 'moderate'
# # # child_dietary_intake = {
# # #     'protein': 100,
# # #     'fat': 50,
# # #     'carbohydrates': 200
# # # }

# # # dietary_recommendations = generate_dietary_recommendations(
# # #     child_age, child_gender, child_activity_level, child_dietary_intake)

# # # print(dietary_recommendations)
