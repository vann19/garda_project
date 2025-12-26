import 'package:flutter/material.dart';
import 'package:frontend/pages/auth/login.dart';
import 'package:frontend/pages/auth/register.dart';
import 'package:frontend/pages/home/home.dart';


void main() {
  runApp(const MyApp());
}

class MyApp  extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return 
    MaterialApp(debugShowCheckedModeBanner: false,
    title: 'Flutter Login',

    theme: ThemeData(
      colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
    ),

    home: const LoginPage(),

    );
    
  }
}