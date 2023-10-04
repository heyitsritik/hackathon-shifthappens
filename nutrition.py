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






