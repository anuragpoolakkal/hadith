[![npm package](https://img.shields.io/npm/v/hadith.svg)](https://www.npmjs.com/package/hadith)

# Hadith

This JavaScript package provides access to Hadith data offline.

Available Hadith data:

-   Bukhari
-   Muslim
-   Abu Dawud
-   Tirmidhi
-   Nasai
-   Ibn Majah

Hadith data is taken from sunnah.com.

## Getting Started

To use this package, install `hadith` by running:

```bash
npm install hadith
```

## Functions

### Collections:

-   **`getCollections()`** - Returns a list of available Hadith collections.
-   **`getCollection(Collections collection)`** - Takes a [collection] as an argument and returns a [Collection] object.
-   **`getCollectionData(Collections collection, Languages language)`** - Takes [collection] and [language] as arguments and returns a [CollectionData] object.

### Books:

-   **`getBooks(Collections collection)`** - Takes a [collection] as an argument and returns a list of [Book] objects.
-   **`getBook(Collections collection, int bookNumber)`** - Takes [collection] and [bookNumber] as arguments and returns a [Book] object.
-   **`getBookData(Collections collection, int bookNumber, Languages language)`** - Takes [collection], [bookNumber], and [language] as arguments and returns a [BookData] object.

### Hadiths:

-   **`getHadiths(Collections collection, int bookNumber)`** - Takes [collection] and [bookNumber] as arguments and returns a list of [Hadith] objects.
-   **`getHadith(Collections collection, int bookNumber, int hadithNumber)`** - Takes [collection], [bookNumber], and [hadithNumber] as arguments and returns a [Hadith] object.
-   **`getHadithByNumber(Collections collection, String hadithNumber)`** - Takes [collection] and [hadithNumber] as arguments and returns a [Hadith] object.
-   **`getHadithData(Collections collection, int bookNumber, int hadithNumber, Languages language)`** - Takes [collection], [bookNumber], [hadithNumber], and [language] as arguments and returns a [HadithData] object.
-   **`getHadithDataByNumber(Collections collection, String hadithNumber, Languages language)`** - Takes [collection], [hadithNumber], and [language] as arguments and returns a [HadithData] object.

### URLs:

-   **`getCollectionURL(Collections collection)`** - Takes [collection] as an argument and returns the URL (from sunnah.com) of that collection.
-   **`getBookURL(Collections collection, int bookNumber)`** - Takes [collection] and [bookNumber] as arguments and returns the URL (from sunnah.com) of that book.

## Examples

### Collections:

**Get available collections:**
```javascript
import { getCollections } from "hadith";

console.log(getCollections());
```

**Get a single collection:**
```javascript
import { getCollection, Collections } from 'hadith';

console.log(getCollection(Collections.BUKHARI));
```

**Get collection data:**
```javascript
import { getCollectionData, Collections, Languages } from 'hadith';

console.log(getCollectionData(Collections.BUKHARI, Languages.EN));
```

### Books:
**Get books of a collection:**
```javascript
import { getBooks, Collections } from 'hadith';

console.log(getBooks(Collections.BUKHARI));
```

**Get a single book:**
```javascript
import { getBook, Collections } from 'hadith';

console.log(getBook(Collections.BUKHARI, 1));
```

**Get book data:**
```javascript
Copy code
import { getBookData, Collections, Languages } from 'hadith';

console.log(getBookData(Collections.BUKHARI, 1, Languages.EN));
```

### Hadiths:
**Get hadiths of a book:**
```javascript
import { getHadiths, Collections } from 'hadith';

console.log(getHadiths(Collections.BUKHARI, 1));
```

**Get a single hadith:**
```javascript
import { getHadith, Collections } from 'hadith';

console.log(getHadith(Collections.BUKHARI, 1, 1));
```

**Get hadith data:**
```javascript
import { getHadithData, Collections, Languages } from 'hadith';

console.log(getHadithData(Collections.BUKHARI, 1, 1, Languages.EN));
```

**Get hadith data by hadith number:**
```javascript
import { getHadithDataByNumber, Collections, Languages } from 'hadith';

console.log(getHadithDataByNumber(Collections.BUKHARI, '1', Languages.EN));
```

### URLs:
**Get collection URL:**
```javascript
import { getCollectionURL, Collections } from 'hadith';

console.log(getCollectionURL(Collections.BUKHARI));
```
**Get book URL:**
```javascript
import { getBookURL, Collections } from 'hadith';

console.log(getBookURL(Collections.BUKHARI, 1));
```
