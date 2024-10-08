import { abudawudBooks } from "./utils/abudawud/books.js";
import { abudawudHadiths } from "./utils/abudawud/hadiths.js";
import { bukhariBooks } from "./utils/bukhari/books.js";
import { bukhariHadiths } from "./utils/bukhari/hadiths.js";
import { ibnmajahBooks } from "./utils/ibnmajah/books.js";
import { ibnmajahHadiths } from "./utils/ibnmajah/hadiths.js";
import { muslimBooks } from "./utils/muslim/books.js";
import { muslimHadiths } from "./utils/muslim/hadiths.js";
import { nasaiBooks } from "./utils/nasai/books.js";
import { nasaiHadiths } from "./utils/nasai/hadiths.js";
import { tirmidhiBooks } from "./utils/tirmidhi/books.js";
import { tirmidhiHadiths } from "./utils/tirmidhi/hadiths.js";
import { CollectionData, Collection, BookData, Book, HadithData, Hadith } from "./utils/classes.js";

const Collections = {
	BUKHARI: "bukhari",
	MUSLIM: "muslim",
	NASAI: "nasai",
	ABUDAWUD: "abudawud",
	IBNMAJAH: "ibnmajah",
	TIRMIDHI: "tirmidhi",
};

const Languages = {
	EN: "en",
	AR: "ar",
};

function getLanguageIndex(language) {
	switch (language) {
		case Languages.EN:
			return 0;
		case Languages.AR:
			return 1;
		default:
			return 0;
	}
}

function getCollectionIndex(collection) {
	switch (collection) {
		case Collections.ABUDAWUD:
			return 0;
		case Collections.BUKHARI:
			return 1;
		case Collections.IBNMAJAH:
			return 2;
		case Collections.MUSLIM:
			return 3;
		case Collections.NASAI:
			return 4;
		case Collections.TIRMIDHI:
			return 5;
		default:
			return 0;
	}
}

function readBookData(collection) {
	switch (collection) {
		case Collections.ABUDAWUD:
			return abudawudBooks;
		case Collections.BUKHARI:
			return bukhariBooks;
		case Collections.IBNMAJAH:
			return ibnmajahBooks;
		case Collections.MUSLIM:
			return muslimBooks;
		case Collections.NASAI:
			return nasaiBooks;
		case Collections.TIRMIDHI:
			return tirmidhiBooks;
		default:
			return abudawudBooks;
	}
}

function readHadithData(collection) {
	switch (collection) {
		case Collections.ABUDAWUD:
			return abudawudHadiths;
		case Collections.BUKHARI:
			return bukhariHadiths;
		case Collections.IBNMAJAH:
			return ibnmajahHadiths;
		case Collections.MUSLIM:
			return muslimHadiths;
		case Collections.NASAI:
			return nasaiHadiths;
		case Collections.TIRMIDHI:
			return tirmidhiHadiths;
		default:
			return abudawudHadiths;
	}
}

function getCollections() {
	const values = [];

	for (const collection of collections) {
		const collectionData = [];
		for (const data of collection["collection"]) {
			collectionData.push(
				new CollectionData({
					lang: data["lang"],
					title: data["title"],
					shortIntro: data["shortIntro"],
				})
			);
		}
		values.push(
			new Collection({
				name: collection["name"],
				hasBooks: collection["hasBooks"],
				hasChapters: collection["hasChapters"],
				collection: collectionData,
				totalHadith: collection["totalHadith"],
				totalAvailableHadith: collection["totalAvailableHadith"],
			})
		);
	}
	return values;
}

function getCollection(collection) {
	const collectionIndex = _getCollectionIndex(collection);

	const collectionData = [];
	for (const data of collections[collectionIndex]["collection"]) {
		collectionData.push(
			new CollectionData({
				lang: data["lang"],
				title: data["title"],
				shortIntro: data["shortIntro"],
			})
		);
	}

	const collection0 = collections[collectionIndex];

	return new Collection({
		name: collection0["name"],
		hasBooks: collection0["hasBooks"],
		hasChapters: collection0["hasChapters"],
		collection: collectionData,
		totalHadith: collection0["totalHadith"],
		totalAvailableHadith: collection0["totalAvailableHadith"],
	});
}

function getCollectionData(collection, language) {
	const collectionIndex = _getCollectionIndex(collection);
	const langIndex = _getLanguageIndex(language);

	const collectionData = collections[collectionIndex]["collection"][langIndex];

	return new CollectionData({
		lang: collectionData["lang"],
		title: collectionData["title"],
		shortIntro: collectionData["shortIntro"],
	});
}

function getBooks(collection) {
	const values = [];
	const books = _readBookData(collection);

	for (const book of books) {
		const bookData = [];
		for (const data of book["book"]) {
			bookData.push(
				new BookData({
					lang: data["lang"],
					name: data["name"],
				})
			);
		}
		values.push(
			new Book({
				bookNumber: book["bookNumber"],
				book: bookData,
				hadithStartNumber: book["hadithStartNumber"],
				hadithEndNumber: book["hadithEndNumber"],
				numberOfHadith: book["numberOfHadith"],
			})
		);
	}
	return values;
}

function getBook(collection, bookNumber) {
	bookNumber -= 1;
	const books = _readBookData(collection);

	const bookData = [];
	for (const data of books[bookNumber]["book"]) {
		bookData.push(
			new BookData({
				lang: data["lang"],
				name: data["name"],
			})
		);
	}

	return new Book({
		bookNumber: books[bookNumber]["bookNumber"],
		book: bookData,
		hadithStartNumber: books[bookNumber]["hadithStartNumber"],
		hadithEndNumber: books[bookNumber]["hadithEndNumber"],
		numberOfHadith: books[bookNumber]["numberOfHadith"],
	});
}

function getBookData(collection, bookNumber, language) {
	bookNumber -= 1;
	const books = _readBookData(collection);

	const langIndex = _getLanguageIndex(language);

	return new BookData({
		lang: books[bookNumber]["book"][langIndex]["lang"],
		name: books[bookNumber]["book"][langIndex]["name"],
	});
}

function getHadiths(collection, bookNumber) {
	const hadiths = _readHadithData(collection);

	const values = [];
	for (const hadith of hadiths[bookNumber.toString()]) {
		const hadithData = [];
		for (const data of hadith["hadith"]) {
			hadithData.push(
				new HadithData({
					lang: data["lang"],
					chapterNumber: data["chapterNumber"],
					chapterTitle: data["chapterTitle"],
					urn: data["urn"],
					body: data["body"],
					grades: data["grades"],
				})
			);
		}
		values.push(
			new Hadith({
				collection: hadith["collection"],
				bookNumber: hadith["bookNumber"],
				chapterId: hadith["chapterId"],
				hadithNumber: hadith["hadithNumber"],
				hadith: hadithData,
			})
		);
	}
	return values;
}

function getHadith(collection, bookNumber, hadithNumber) {
	hadithNumber -= 1;
	const hadiths = _readHadithData(collection)[bookNumber.toString()][hadithNumber];

	const hadithData = [];
	for (const data of hadiths["hadith"]) {
		hadithData.push(
			new HadithData({
				lang: data["lang"],
				chapterNumber: data["chapterNumber"],
				chapterTitle: data["chapterTitle"],
				urn: data["urn"],
				body: data["body"],
				grades: data["grades"],
			})
		);
	}

	return new Hadith({
		collection: hadiths["collection"],
		bookNumber: hadiths["bookNumber"],
		chapterId: hadiths["chapterId"],
		hadithNumber: hadiths["hadithNumber"],
		hadith: hadithData,
	});
}

function getHadithByNumber(collection, hadithNumber) {
	const hadiths = _readHadithData(collection);

	for (let i = 1; i <= getBooks(collection).length; i++) {
		if (!hadiths.hasOwnProperty(i.toString())) {
			continue;
		}
		for (const hadith of hadiths[i.toString()]) {
			if (hadith["hadithNumber"] === hadithNumber.toString()) {
				const hadithData = [];
				for (const data of hadith["hadith"]) {
					hadithData.push(
						new HadithData({
							lang: data["lang"],
							chapterNumber: data["chapterNumber"],
							chapterTitle: data["chapterTitle"],
							urn: data["urn"],
							body: data["body"],
							grades: data["grades"],
						})
					);
				}
				return new Hadith({
					collection: hadith["collection"],
					bookNumber: hadith["bookNumber"],
					chapterId: hadith["chapterId"],
					hadithNumber: hadith["hadithNumber"],
					hadith: hadithData,
				});
			}
		}
	}

	return null;
}

function getHadithData(collection, bookNumber, hadithNumber, language) {
	const langIndex = _getLanguageIndex(language);

	const hadith = getHadith(collection, bookNumber, hadithNumber).hadith[langIndex];
	return new HadithData({
		lang: hadith.lang,
		chapterNumber: hadith.chapterNumber,
		chapterTitle: hadith.chapterTitle,
		urn: hadith.urn,
		body: hadith.body,
		grades: hadith.grades,
	});
}

function getHadithDataByNumber(collection, hadithNumber, language) {
	const langIndex = _getLanguageIndex(language);

	const hadith = getHadithByNumber(collection, hadithNumber);
	if (!hadith) {
		return new HadithData({
			lang: "",
			chapterNumber: "",
			chapterTitle: "",
			urn: 0,
			body: "",
			grades: [],
		});
	}
	return new HadithData({
		lang: hadith.hadith[langIndex].lang,
		chapterNumber: hadith.hadith[langIndex].chapterNumber,
		chapterTitle: hadith.hadith[langIndex].chapterTitle,
		urn: hadith.hadith[langIndex].urn,
		body: hadith.hadith[langIndex].body,
		grades: hadith.hadith[langIndex].grades,
	});
}

function getCollectionURL(collection) {
	switch (collection) {
		case Collections.abudawud:
			return "https://sunnah.com/abudawud";
		case Collections.bukhari:
			return "https://sunnah.com/bukhari";
		case Collections.ibnmajah:
			return "https://sunnah.com/ibnmajah";
		case Collections.muslim:
			return "https://sunnah.com/muslim";
		case Collections.nasai:
			return "https://sunnah.com/nasai";
		case Collections.tirmidhi:
			return "https://sunnah.com/tirmidhi";
		default:
			return "https://sunnah.com";
	}
}

function getBookURL(collection, bookNumber) {
	return `${getCollectionURL(collection)}/${bookNumber}`;
}

module.exports = {
	Collections,
	Languages,
	getLanguageIndex,
	getCollectionIndex,
	readBookData,
	readHadithData,
	getCollections,
	getCollection,
	getCollectionData,
	getBooks,
	getBook,
	getBookData,
	getHadiths,
	getHadith,
	getHadithByNumber,
	getHadithData,
	getHadithDataByNumber,
	getCollectionURL,
	getBookURL,
};
