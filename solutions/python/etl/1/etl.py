def transform(legacy_data):
    return {letter.lower(): key for key, letters in legacy_data.items() for letter in letters}