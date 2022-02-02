import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import '../model/theory.dart';

@Component(
    selector: 'edit-form',
    templateUrl: 'edit_form_component.html',
    styleUrls: ['edit_form_component.css'],
    directives: [coreDirectives, formDirectives])
    
class EditFormComponent implements OnInit {

  @Input()
  late Bookmark bookmark;
  late Bookmark editedBookmark;

  final _formUpdateCtrl = StreamController();
  @Output('onUpdate')
  Stream get formUpdate => _formUpdateCtrl.stream;

  final _formDeleteCtrl = StreamController();
  @Output('onDelete')
  Stream get formDelete => _formDeleteCtrl.stream;

  bool submitted = false;

  @override
  Future<Null> ngOnInit() async {
    editedBookmark = Bookmark()..update(bookmark);
  }

  updateBookmark(NgForm form) {
    print(form.value);
    print(bookmark.title);
    submitted = true;
    if(form.valid!){
      bookmark
      ..update(editedBookmark)
      ..edit = false;
      _formUpdateCtrl.add(null);
    }
    print(bookmark.title);
  }

  removeBookmark(inpitBookmark) {
    print(inpitBookmark.id);
    if(inpitBookmark.id != ''){
    _formDeleteCtrl.add(null);
    }
  }
}
