import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:dart_application/src/edit_form/edit_form_component.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:dart_application/src/services/theory_service.dart';
import '../model/theory.dart';
import '../edit_form/edit_form_component.dart';
import '../services/theory_service.dart';

@Component(
    selector: 'theory-content',
    templateUrl: 'theory_content_component.html',
    styleUrls: ['theory_content_component.css'],
    directives: [coreDirectives, EditFormComponent, formDirectives],
    providers: [ClassProvider(TheoryService)])

class TheoryContentComponent implements OnInit {
  TheoryContentComponent(this._bmService);

  final TheoryService _bmService;
  List bookmarks = [];
  bool isLoading = true;

  late Bookmark editedBookmark;
  Bookmark openBookmark = Bookmark();

  @Input() //
  late Bookmark bookmark; //

  bool submitted = false;

  @override
  Future<Null> ngOnInit() async {
    bookmarks = await _bmService.getBookmarks();
    isLoading = false;
  }

  removeBookmark(int index) async {
    await _bmService.removeBookmark(bookmarks[index]);
    bookmarks.removeAt(index);
  }

  editBookmark(int index) {
    for (int i = 0; i < bookmarks.length; i++) {
      if (i == index) {
        bookmarks[i].edit = true;
      } else {
        bookmarks[i].edit = false;
      }
    }
  }

  addBookmark() {
    bookmarks.add(Bookmark());
    for (int i = 0; i < bookmarks.length; i++) {
      bookmarks[i].edit = false;
    }
  }

  onSubmitAddNew(NgForm form) {
    addBookmark();
    bookmark = bookmarks[bookmarks.length - 1];
    var data = form.value;
    bookmark.title = data['title'];
    bookmark.description = data['description'];
    bookmark.url = data['url'];
    editedBookmark = Bookmark()..update(bookmark);
    updateBookmark(bookmarks.length - 1);
    form.reset();
    var modalClose = document.querySelector('#modal-close');
    modalClose?.click();
  }

  updateBookmark(int index) async {
    var bm = bookmarks[index];
    if (bm.id == '') {
      var resId = await _bmService.addBookmark(bm);
      bm.id = resId;
    } else {
      await _bmService.updateBookmark(bm);
    }
  }

  showBookmark(int index) {
    openBookmark = bookmarks[index];
  }

  onClickHandle(value) {}

  linkHandle(event, checkbox, index) {
    print(event);
    checkbox.checked = false;
    print(checkbox.checked);
    showBookmark(index);
  }
}
