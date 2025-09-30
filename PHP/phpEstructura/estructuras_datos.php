<?php

class Node
{
    private $value;
    private $left;
    private $right;

    function __construct($valueParam)
    {
        $this->value = $valueParam;
        $this->left = null;
        $this->right = null;
    }

    

    function getValue()
    {
        return $this->value;
    }
    function getLeft()
    {
        return $this->left;
    }
    function getRight()
    {
        return $this->right;
    }
    function setValue($data)
    {
        $this->value = $data;
    }

    function setLeft($data)
    {
        $this->left = $data;
    }
    function setRight($data)
    {
        $this->right = $data;
    }

}

class BinaryThree
{
    private $root;

    function __construct($data = null)
    {
        $this->root = $data;
    }

    function insert($data)
    {

        $newNode = new Node($data);

        if ($this->root == null) {
            $this->root = $newNode;
            return $this->root;
        }

        $current = $this->root;

        while (true) {
            if ($newNode->getValue() > $current->getValue()) {
                if ($current->getRight() === null) {
                    $current->setRight($newNode);
                    return $newNode;
                } else {
                    $current = $current->getRight();
                }

            } else {
                if ($current->getLeft() === null) {
                    $current->setLeft($newNode);
                    return $newNode;
                } else {
                    $current = $current->getLeft();
                }
            }

        }
    }

    function find($data)
    {
        $current = $this->root;
        while ($current != null) {

            if ($data === $current->getValue()) {
                echo ("valor encontrado " . $data . " = " . $current->getValue());
                echo "\n";
                return;
            } else {
                if ($data > $current->getValue()) {
                    $current = $current->getRight();
                } else {
                    $current = $current->getLeft();
                }
            }

        }
        echo "Valor NO encontrado: " . $data . "\n";
    }

    function delete($data)
    {
        $current = $this->root;
        $parent = null;

        //Buscar nodo y padre
        while ($current != null && $current->getValue() != $data) {
            $parent = $current;
            if ($data < $current->getValue()) {
                $current = $current->getLeft();
            } else {
                $current = $current->getRight();
            }
        }

        if ($current == null) {
            echo "valor no encontrado" . "\n";
            return;
        }

        if ($current->getLeft() == null && $current->getRight() == null) {
            //Caso 1: nodo hoja
            if ($parent == null) {
                $this->root = null;
            } else {
                if ($parent->getLeft() === $current) {
                    $parent->setLeft(null);
                } else {
                    $parent->setRight(null);
                }
            }
            echo "Nodo hoja eliminado: $data \n";
            return;
        } else if ($current->getLeft() == null || $current->getRight() == null) {
            //Caso 2: un hijo

            // encontrar el hijo
            if ($current->getLeft() == null) {
                $child = $current->getRight();
            } else {
                $child = $current->getLeft();
            }

            // reemplazar nodo por su único hijo
            if ($parent == null) {
                $this->root = $child;
            } else {
                if ($parent->getLeft() === $current) {
                    $parent->setLeft($child);
                } else {
                    $parent->setRight($child);
                }
            }
        } else {
            // 1. Encontrar el sucesor (mínimo del subárbol derecho)
            $successorParent = $current;
            $successor = $current->getRight();
            while ($successor->getLeft() != null) {
                $successorParent = $successor;
                $successor = $successor->getLeft();
            }

            // 2. Copiar valor del sucesor al nodo actual
            $current->setValue($successor->getValue());

            // 3. Eliminar el sucesor (que tiene 0 o 1 hijo)
            if ($successorParent->getLeft() === $successor) {
                $successorParent->setLeft($successor->getRight());
            } else {
                $successorParent->setRight($successor->getRight());
            }
        }
    }
}

//funcion para encontrar un valor, devolver mensaje si este dato existe
//funcion para eliminar 


$arbolito = new BinaryThree();
$arbolito->insert(10);

$arbolito->insert(8);

$arbolito->insert(9);

$arbolito->insert(19);

//Buscar un valor
$arbolito->find(8);

//Eliminar un valor
$arbolito->delete(8);

print_r($arbolito);



?>