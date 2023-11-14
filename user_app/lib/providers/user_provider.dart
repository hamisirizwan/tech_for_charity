import 'package:flutter/material.dart';

class UserProvider extends ChangeNotifier {
  String name;

  UserProvider({this.name = ""});

  void changeName(String newName) async {
    name = newName;
    notifyListeners();
  }
}
