import 'dart:async';
import 'package:angular/angular.dart';
import '../model/theory.dart';
import 'package:firebase/firebase.dart';

@Injectable()
class TheoryService {
  TheoryService() {
    initializeApp(
      apiKey: "AIzaSyB4xSIkMLalqzY4xky80qxx7jARVifiGgo",
      authDomain: "dart-angular-56451.firebaseapp.com",
      databaseURL:
          'https://dart-angular-56451-default-rtdb.europe-west1.firebasedatabase.app',
      projectId: "dart-angular-56451",
      storageBucket: "dart-angular-56451.appspot.com",
      messagingSenderId: "225374394969",
      appId: "1:225374394969:web:c625c5c992a80ea34cef48",
    );
    _db = database();
    _ref = _db.ref('bookmarks').ref;
  }

  late Database _db;
  late DatabaseReference _ref;

  Future<List<Bookmark>> getBookmarks() async {
    final List<Bookmark> bookmarks = [];
    final queryEvent = await _ref.once('value');
    final DataSnapshot snapshot = queryEvent.snapshot;
    final bmData = snapshot.val();

    bmData.forEach((key, val) {
      var details = val as Map<String, dynamic>;
      details['id'] = key;
      bookmarks.add(Bookmark.fromMap(details));
    });
    return bookmarks;
  }

  Future addBookmark(Bookmark bm) async {
    var res = _ref.push(bm.asMap());
    return res.key;
  }

  Future updateBookmark(Bookmark bm) async {
    return await _ref.child(bm.id).set(bm.asMap());
  }

  Future removeBookmark(Bookmark bm) async {
    return await _ref.child(bm.id).remove();
  }
}
