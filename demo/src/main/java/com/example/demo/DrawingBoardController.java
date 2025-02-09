package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class DrawingBoardController {

    private List<DrawAction> actions = new ArrayList<>();

    @GetMapping("/actions")
    public List<DrawAction> getActions() {
        return new ArrayList<>(actions); // Devuelve una copia de la lista de acciones
    }

    @PostMapping("/actions")
    public void addAction(@RequestBody DrawAction action) {
        actions.add(action);
    }

    @PostMapping("/clear")
    public void clearActions() {
        actions.clear();
    }

}
