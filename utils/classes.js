class CollectionData {
	constructor(lang, title, shortIntro) {
		this.lang = lang;
		this.title = title;
		this.shortIntro = shortIntro;
	}

	toString() {
		return `\n{\n lang: ${this.lang},\n title: ${this.title},\n shortIntro: ${this.shortIntro}\n}\n`;
	}
}

class Collection {
	constructor(name, hasBooks, hasChapters, collection, totalHadith, totalAvailableHadith) {
		this.name = name;
		this.hasBooks = hasBooks;
		this.hasChapters = hasChapters;
		this.collection = collection;
		this.totalHadith = totalHadith;
		this.totalAvailableHadith = totalAvailableHadith;
	}

	toString() {
		return `\n{\n name: ${this.name},\n hasBooks: ${this.hasBooks},\n hasChapters: ${this.hasChapters},\n collection: ${this.collection},\n totalHadith: ${this.totalHadith},\n totalAvailableHadith: ${this.totalAvailableHadith}\n}\n`;
	}
}

class BookData {
	constructor(lang, name) {
		this.lang = lang;
		this.name = name;
	}

	toString() {
		return `\n{\n lang: ${this.lang},\n name: ${this.name}\n}\n`;
	}
}

class Book {
	constructor(bookNumber, book, hadithStartNumber, hadithEndNumber, numberOfHadith) {
		this.bookNumber = bookNumber;
		this.book = book;
		this.hadithStartNumber = hadithStartNumber;
		this.hadithEndNumber = hadithEndNumber;
		this.numberOfHadith = numberOfHadith;
	}

	toString() {
		return `\n{\n bookNumber: ${this.bookNumber},\n book: ${this.book},\n hadithStartNumber: ${this.hadithStartNumber},\n hadithEndNumber: ${this.hadithEndNumber},\n numberOfHadith: ${this.numberOfHadith}\n}\n`;
	}
}

class HadithData {
	constructor(lang, chapterNumber, chapterTitle, urn, body, grades) {
		this.lang = lang;
		this.chapterNumber = chapterNumber;
		this.chapterTitle = chapterTitle;
		this.urn = urn;
		this.body = body;
		this.grades = grades;
	}

	toString() {
		return `\n{\n lang: ${this.lang},\n chapterNumber: ${this.chapterNumber},\n chapterTitle: ${this.chapterTitle},\n urn: ${this.urn},\n body: ${this.body},\n grades: ${this.grades}\n}\n`;
	}
}

class Hadith {
	constructor(collection, bookNumber, chapterId, hadithNumber, hadith) {
		this.collection = collection;
		this.bookNumber = bookNumber;
		this.chapterId = chapterId;
		this.hadithNumber = hadithNumber;
		this.hadith = hadith;
	}

	toString() {
		return `\n{\n collection: ${this.collection},\n bookNumber: ${this.bookNumber},\n chapterId: ${this.chapterId},\n hadithNumber: ${this.hadithNumber},\n hadith: ${this.hadith}\n}\n`;
	}
}

module.exports = { CollectionData, Collection, BookData, Book, HadithData, Hadith };
