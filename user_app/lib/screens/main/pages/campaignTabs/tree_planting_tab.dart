import 'package:flutter/material.dart';
import 'package:user_app/screens/main/components/empy_data_screen.dart';

class TreePlantingTab extends StatefulWidget {
  const TreePlantingTab({super.key});

  @override
  State<TreePlantingTab> createState() => _TreePlantingTabState();
}

class _TreePlantingTabState extends State<TreePlantingTab> {
  @override
  Widget build(BuildContext context) {
    return const EmptyData(text: "Tree Planting Campaigns");
  }
}